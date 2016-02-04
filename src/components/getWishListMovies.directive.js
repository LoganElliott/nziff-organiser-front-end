'use strict';

import './styles.scss';
import template from './template.html';

let directive = (getWishListMoviesService) => {
    var controller = ['getWishListMoviesService',function(getWishListMoviesService){
        this.getWishListMoviesService = getWishListMoviesService;
    }];
    return {
        controller: controller,
        controllerAs: 'getWishListMovies',
        template,
        bindToController: true
    };
};

export default ['getWishListMoviesService', directive];