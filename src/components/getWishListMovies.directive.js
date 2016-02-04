'use strict';

import './styles.scss';
import template from './template.html';

let directive = (getWishListMoviesService) => {
    var controller = ['getWishListMoviesService',function(getWishListMoviesService){
        this.getWishListMoviesService = getWishListMoviesService;
        this.currentLanguage = 'en-NZ';
    }];
    return {
        scope:{},
        restrict: 'E',
        controller: controller,
        controllerAs: 'getWishListMoviesMain',
        template,
        bindToController: true
    };
};

export default ['getWishListMoviesService', directive];