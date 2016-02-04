'use strict';
import getWishListMoviesService from './services/getWishListMovies-service-module';
import languageSelect from './directives/languageSelect/languageSelect.module'
import getWishListMoviesGetMovies from './directives/getMovies/getWishListMovies-getMovies-module';
import loadingWheel from './directives/LoadingWheel/loadingWheel.module';
import displayMovies from './directives/displayMovies/displayMovies.module';

import mainDirective from './getWishListMovies.directive';

let getMoviesModule = angular.module('component.getWishListMovies', [
    getWishListMoviesService.name,
    getWishListMoviesGetMovies.name,
    displayMovies.name,
    loadingWheel.name,
    languageSelect.name
]).directive('dNziffoMovies',mainDirective);


export default getMoviesModule;

