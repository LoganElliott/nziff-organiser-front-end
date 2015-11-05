'use strict';

import './styles.css!';
import template from './template.html!text';
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