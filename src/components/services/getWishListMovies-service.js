'use strict';
import JSURL from 'jsurl';
import _ from 'lodash';

class Service {
    constructor($http,config,$translate) {
        this.$http = $http;
        this.busy = false;
        this.hasLoadedMovies = false;
        this.movies = [];
        this.wishListId = '';
        this.dayFilters = _.cloneDeep(config.dayFilterDefaults);
        this.apiUrl = config.apiUrl;
        this.showFiltersMenu = false;
        if(this.wishListId.length != 0){
            this.getWishListMovies();
        }
        this.$translate = $translate;
    }

    getWishListMovies(){
        if (this.busy || this.wishListId == '') {
            return;
        }

        this.busy = true;

        try{
            var apiMethod = 'getWishListJson';

            var fullPostUrl = this.apiUrl + '/' + apiMethod + '/' + this.wishListId + '?locale=' + this.$translate.use();

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
            });
        }catch(err) {
            this.movies.length = 0;
            this.busy = false;
            this.hasLoadedMovies = false;
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

export default ['$http','config','$translate',Service];