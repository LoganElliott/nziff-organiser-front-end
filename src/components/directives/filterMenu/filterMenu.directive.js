'use strict';

import './styles.scss';
import template from './template.html';

let directive = () => {
    return {
        controller: angular.noop,
        controllerAs: 'filterMenu',
        template,
        bindToController: {
            dayFilters: '='
        }
    };
};

export default directive;