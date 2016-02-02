'use strict';

import template from './getWishlistMovies.html';

let router = ($stateProvider) => $stateProvider.state('getWishListMovies', {
    url: '/',
    template
});

export default ['$stateProvider', router];