'use strict';

import './styles.css!';
import template from './template.html!text';
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