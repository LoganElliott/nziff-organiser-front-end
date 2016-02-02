'use strict';

import './styles.scss';
import template from './template.html';
import controller from './controller';

let directive = (getWishListMoviesService) => {
    return {
        controller: controller,
        controllerAs: 'shareLink',
        template,
        bindToController: true
    };
};

export default ['getWishListMoviesService', directive];