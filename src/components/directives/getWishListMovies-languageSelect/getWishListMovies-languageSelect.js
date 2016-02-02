'use strict';

import './styles.scss';
import template from './template.html';
import controller from './controller';

let directive = () => {
    return {
        controller: controller,
        controllerAs: 'languageSelect',
        template,
        bindToController: true
    };
};

export default ['getWishListMoviesService', directive];