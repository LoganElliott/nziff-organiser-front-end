import languageSelectController from './languageSelect.controller';
import getWishListMoviesLanguageSelect from './languageSelect.directive';

export default angular.module('component.getWishListMovies.languageSelect', [])
    .controller('LanguageSelectController',languageSelectController)
    .directive('dGetWishListMoviesLanguageSelect',getWishListMoviesLanguageSelect);