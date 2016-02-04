'use strict';

import './styles.scss';
import template from './template.html';
import controller from './languageSelect.controller';

let directive = () => {
    return {
        scope: {},
        restrict: 'E',
        controller: controller,
        controllerAs: 'languageSelect',
        template,
        bindToController: {
            currentLanguage: '@'
        }
    };
};
export default ['getWishListMoviesService', directive];