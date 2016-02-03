import wishListInputController from './wishListInput.controller.js';
import getWishListMoviesGetMoviesWishListInput from './wishListInput.directive.js';

export default angular.module('component.getWishListMovies.wishListInput', [])
    .controller('WishListInputController',wishListInputController)
    .directive('dGetWishListMoviesGetMoviesWishListInput',getWishListMoviesGetMoviesWishListInput)