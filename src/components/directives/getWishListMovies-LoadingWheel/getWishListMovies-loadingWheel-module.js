import angular from 'angular';
import getWishListMoviesLoadingWheel from './getWishListMovies-loadingWheel';

export default angular.module('component.getWishListMovies.loadingWheel', [])
    .directive('dGetWishListMoviesLoadingWheel',getWishListMoviesLoadingWheel)