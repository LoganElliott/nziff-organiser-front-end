import wishListInputController from './controller';
import getWishListMoviesGetMoviesWishListInput from './getWishListMovies-getMovies-wishListInput';

export default angular.module('component.getWishListMovies.wishListInput', [])
    .controller('WishListInputController',wishListInputController)
    .directive('dGetWishListMoviesGetMoviesWishListInput',getWishListMoviesGetMoviesWishListInput)