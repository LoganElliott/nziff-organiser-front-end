'use strict';

import './styles.css!';
import template from './template.html!text';

let directive = (getWishListMoviesService) => {
    var controller = ['getWishListMoviesService',function(getWishListMoviesService){
        this.getWishListMoviesService = getWishListMoviesService;
    }];
    return {
        controller: controller,
        controllerAs: 'filterMenuButton',
        template,
        bindToController: true
    };
};

export default ['getWishListMoviesService', directive];