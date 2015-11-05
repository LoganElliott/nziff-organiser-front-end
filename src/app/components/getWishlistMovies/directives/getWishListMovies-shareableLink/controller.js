'use strict';
import JSURL from 'jsurl';
import _ from 'lodash';

class Controller {

    constructor($http,config, getWishListMoviesService) {
        this.$http = $http;
        this.getWishListMoviesService = getWishListMoviesService;
        this.nziffoUrl = config.nziffoUrl;
        this.dayFilterDefaults = _.cloneDeep(config.dayFilterDefaults);
        this.shareableLink = '';
    }

    createShareAbleUrlFromPost() {
        if(this.getWishListMoviesService.wishListId != '') {
            var state = {
                wishListId: this.getWishListMoviesService.wishListId,
                dayFilters: this.removeDefaultFilterStates(this.getWishListMoviesService.dayFilters,this.dayFilterDefaults)
            };
            var jsonStateAsString = JSURL.stringify(state);
            this.shortenUrl(jsonStateAsString);
        }
    }

    removeDefaultFilterStates(dayFilters,dayFilterDefaults){
        var cleanedFilters = [];
        for(var i=0; i<dayFilterDefaults.length; i++){
            var currentDayFilter = _.clone(dayFilters[i]);
            if(currentDayFilter.allowedDay == dayFilterDefaults[i].allowedDay){
                delete currentDayFilter.allowedDay;
            }

            if(currentDayFilter.minStartTime == null || currentDayFilter.minStartTime == 0){
                delete currentDayFilter.minStartTime;
            } else {
                currentDayFilter.minStartTime = currentDayFilter.minStartTime.getTime() - (new Date(0)).getTimezoneOffset() * 60000;
            }

            if(currentDayFilter.maxEndTime == null || currentDayFilter.maxEndTime == 0){
                delete currentDayFilter.maxEndTime;
            } else{
                currentDayFilter.maxEndTime = currentDayFilter.maxEndTime.getTime() - (new Date(0)).getTimezoneOffset()*60000;
            }

            delete currentDayFilter.$$hashKey;

            if(Object.getOwnPropertyNames(currentDayFilter).length > 1){
                cleanedFilters.push(currentDayFilter);
            }
        }

        return cleanedFilters;
    }

    shortenUrl(jsonStateAsString) {
        var googleShortenerPostUrl = 'https://www.googleapis.com/urlshortener/v1/url';
        var apiKey = 'AIzaSyAdXyQvg8FL8433SZx70rNftsWMIIEKldQ';
        var fullPostUrl = googleShortenerPostUrl + '?key=' + apiKey;
        var shareableLinkUrl = this.nziffoUrl +'?state=' + jsonStateAsString;
        var jsonForGoogle = {longUrl : shareableLinkUrl};
        console.log('Requesting shortened url from google api');
        this.$http.post(fullPostUrl, jsonForGoogle).then((result) => {
            this.getWishListMoviesService.isLinkShared = true;
            this.shareableLink =  result.data.id;
        }, (error) => {
            console.log(error.status);
        });
    }
}

Controller.$inject = ['$http','config','getWishListMoviesService'];

export default Controller;
