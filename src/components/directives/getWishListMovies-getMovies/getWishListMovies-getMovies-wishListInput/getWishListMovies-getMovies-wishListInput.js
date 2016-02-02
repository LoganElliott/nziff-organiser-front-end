'use strict';

import './styles.scss';
import template from './template.html';

let directive = () => {
    return {
        controller: 'WishListInputController',
        controllerAs: 'wishListInput',
        template,
        bindToController: true
    };
};

export default ['getWishListMoviesService', directive];