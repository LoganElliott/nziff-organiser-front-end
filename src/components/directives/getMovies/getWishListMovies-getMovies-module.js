import showFilterButton from '../showFilterMenuButton/getWishListMovies-getMovies-showFilterMenuButton-module'
import wishListInput from '../wishListInput/wishListInput.module'
import filterMenu from '../filterMenu/filterMenu.module'
import getWishListMoviesGetMovies from './getWishListMovies-getMovies';

export default angular.module('component.getWishListMovies.getMovies', [
        showFilterButton.name,
        wishListInput.name,
        filterMenu.name
    ])
    .directive('dGetWishListMoviesGetMovies',getWishListMoviesGetMovies);