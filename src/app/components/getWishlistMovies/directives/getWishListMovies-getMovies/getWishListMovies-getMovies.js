'use strict';

import './styles.css!';
import template from './template.html!text';

let directive = () => {
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

export default ['getWishListMoviesService',directive];