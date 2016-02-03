'use strict';

import './styles.scss';

let directive = (getWishListMoviesService) => {
    var controller = ['getWishListMoviesService',function(getWishListMoviesService){
        this.getWishListMoviesService = getWishListMoviesService;
    }];
    return {
        controller: controller,
        controllerAs: 'loadingWheel',
        template:`<md-progress-circular md-mode="indeterminate" md-diameter="60" id="movies-loading-spinner" ng-show="loadingWheel.getWishListMoviesService.busy"></md-progress-circular>`,
        bindToController: true
    };
};

export default ['getWishListMoviesService', directive];