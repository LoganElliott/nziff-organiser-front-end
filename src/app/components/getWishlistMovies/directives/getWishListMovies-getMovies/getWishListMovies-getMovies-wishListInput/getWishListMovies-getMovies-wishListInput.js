'use strict';

import './styles.css!';
import template from './template.html!text';

let directive = () => {
    return {
        controller: 'WishListInputController',
        controllerAs: 'wishListInput',
        template,
        bindToController: true
    };
};

export default ['getWishListMoviesService', directive];