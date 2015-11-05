'use strict';
import JSURL from 'jsurl';
import _ from 'lodash';

class Controller {

    constructor($translate,config, getWishListMoviesService) {
        this.getWishListMoviesService = getWishListMoviesService;
        this.languages = config.languages;
        this.$translate = $translate;
    }

    changeLanguage(){
        this.$translate.use(this.getWishListMoviesService.languageCode);
        this.getWishListMoviesService.getWishListMovies();
    }
}

Controller.$inject = ['$translate','config','getWishListMoviesService'];

export default Controller;
