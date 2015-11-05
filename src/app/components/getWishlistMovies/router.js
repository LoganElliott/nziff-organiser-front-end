'use strict';

import template from './getWishListMovies.html!text';

let router = ($stateProvider) => $stateProvider.state('getWishListMovies', {
    url: '/',
    template
});

export default ['$stateProvider', router];