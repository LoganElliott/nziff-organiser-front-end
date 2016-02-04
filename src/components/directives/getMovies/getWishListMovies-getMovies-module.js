import wishListInput from '../wishListInput/wishListInput.module'
import filterMenu from '../filterMenu/filterMenu.module'
import getWishListMoviesGetMovies from './getWishListMovies-getMovies';

export default angular.module('component.getWishListMovies.getMovies', [
        wishListInput.name,
        filterMenu.name
    ])
    .directive('dGetWishListMoviesGetMovies',getWishListMoviesGetMovies);