'use strict';

import './styles.scss';
import template from './template.html';

let directive = () => {
    return {
        scope: {},
        restrict: 'E',
        controller: angular.noop,
        controllerAs: 'displaytMovies',
        template,
        bindToController: {
            isBusy: '=',
            hasLoadedMovies: '=',
            movies: '='
        }
    };
};

export default directive;