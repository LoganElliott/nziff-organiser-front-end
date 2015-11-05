import angular from 'angular';
import showFilterButton from './getWishListMovies-getMovies-showFilterMenuButton/getWishListMovies-getMovies-showFilterMenuButton-module'
import wishListInput from './getWishListMovies-getMovies-wishListInput/getWishListMovies-getMovies-wishListInput-module'
import filterMenu from './getWishListMovies-getMovies-filterMenu/getWishListMovies-getMovies-filterMenu-module'
import getWishListMoviesGetMovies from './getWishListMovies-getMovies';

export default angular.module('component.getWishListMovies.getMovies', [
        showFilterButton.name,
        wishListInput.name,
        filterMenu.name
    ])
    .directive('dGetWishListMoviesGetMovies',getWishListMoviesGetMovies);