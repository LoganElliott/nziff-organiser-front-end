import angular from 'angular';
import shareButtonController from './controller';
import getWishListMoviesShareableLink from './getWishListMovies-shareableLink';

export default angular.module('component.getWishListMovies.shareableLink', [])
    .controller('ShareButtonController',shareButtonController)
    .directive('dGetWishListMoviesShareableLink',getWishListMoviesShareableLink)