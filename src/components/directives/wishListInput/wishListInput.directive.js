'use strict';

import './styles.scss';
import template from './template.html';
import controller from './wishListInput.controller';

let directive = () => {
    return {
        scope: {},
        restrict: 'E',
        controller: controller,
        controllerAs: 'wishListInput',
        template,
        bindToController: {
            wishListId: '='
        }
    };
};

export default directive;