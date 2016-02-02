import languageSelectController from './controller';
import getWishListMoviesLanguageSelect from './getWishListMovies-languageSelect';

export default angular.module('component.getWishListMovies.languageSelect', [])
    .controller('LanguageSelectController',languageSelectController)
    .directive('dGetWishListMoviesLanguageSelect',getWishListMoviesLanguageSelect);