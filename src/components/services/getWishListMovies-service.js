'use strict';
import JSURL from 'jsurl';
import _ from 'lodash';

class Service {
    constructor($http,$location,config) {
        this.$http = $http;
        this.busy = false;
        this.hasLoadedMovies = false;
        this.movies = [];
        this.wishListId = '';
        this.dayFilters = _.cloneDeep(config.dayFilterDefaults);
        this.apiUrl = config.apiUrl;
        this.isLinkShared = false;
        this.showFiltersMenu = false;
        this.deconstructQueryData($location.search().state);
        this.languageCode = 'en-NZ';
        if(this.wishListId.length != 0){
            this.getWishListMovies();
        }
    }

    deconstructQueryData(urlState){
        var state = JSURL.parse(urlState);
        if(state != null){
            this.wishListId = state.wishListId;
            this.dayFilters = this.mergeNewFiltersWithDefaults(this.dayFilters,state.dayFilters);
        }
    }

    mergeNewFiltersWithDefaults(defaultDayFilters,newDayFilters){
        var mergedFilters = [];
        var newDayFiltersDictionary = {};
        for(var filter of newDayFilters){
            newDayFiltersDictionary[filter.dayOfWeek] = filter;
        }
        for(var i =0;i < defaultDayFilters.length;i++){
            var defaultFilter = defaultDayFilters[i];
            var currentDay = newDayFiltersDictionary[defaultFilter.dayOfWeek];
            if(currentDay != null){
                if(currentDay.minStartTime != null){
                    currentDay.minStartTime = new Date(currentDay.minStartTime + (new Date(0)).getTimezoneOffset()*60000);
                }

                if(currentDay.maxEndTime != null){
                    currentDay.maxEndTime = new Date(currentDay.maxEndTime + (new Date(0)).getTimezoneOffset()*60000);
                }

                var mergedFilter = _.merge(defaultFilter,currentDay);
                mergedFilters.push(mergedFilter);
            } else{
                mergedFilters.push(defaultFilter);
            }
        }
        return mergedFilters;
    }

    getWishListMovies(){
        if (this.busy || this.wishListId == '') {
            return;
        }

        this.busy = true;

        try{
            var apiMethod = 'getWishListJson';

            var fullPostUrl = this.apiUrl + '/' + apiMethod + '/' + this.wishListId + '?locale=' + this.languageCode;

            var adjustedFilters = this.fixFilterTimeZones(this.dayFilters);

            console.log('Getting movies from ' + apiMethod);

            this.$http.post(fullPostUrl, adjustedFilters).then((result) => {
                var data = result.data;
                if (data.length == 0) {
                    this.movies.length = 0;
                    this.hasLoadedMovies = false;
                    console.log('No data has been returned, your wish list may not be valid or you have applied to strict filtering?');
                    return;
                }
                console.log("Data received from api");
                this.movies = data;
                this.hasLoadedMovies = true;
            }, (error) => {
                this.movies.length = 0;
                this.hasLoadedMovies = false;
            }).then( () => {
                this.busy = false;
                this.isLinkShared = false;
            });
        }catch(err) {
            this.movies.length = 0;
            this.busy = false;
            this.hasLoadedMovies = false;
            this.isLinkShared = false;
            console.log(err);
            console.log("Unable to retrieve movies from wish list url");
        }
    }

    fixFilterTimeZones(filters){
        return filters.map(day => {
            var newDay = _.clone(day);
            newDay.minStartTime = this.adjustTime(newDay.minStartTime,'min');
            newDay.maxEndTime = this.adjustTime(newDay.maxEndTime,'max');
            return newDay;
        });
    }

    adjustTime(time,minOrMax){
        if(time != null && time != 0) {
            return (time.getTime() - time.getTimezoneOffset() * 60000);
        }
        if(minOrMax == 'min'){
            return 0;
        }
        if(minOrMax == 'max'){
            return 86400000;
        }
    }
}

export default ['$http','$location','config',Service];