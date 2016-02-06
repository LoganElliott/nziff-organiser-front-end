'use strict';
import angular from 'angular';
import './styles.scss';

let directive = () => {
    return {
        scope: {},
        restrict: 'E',
        controller: angular.noop,
        controllerAs: 'loadingWheel',
        template:`<md-progress-circular md-mode="indeterminate" md-diameter="60" id="movies-loading-spinner" ng-show="loadingWheel.isBusy"></md-progress-circular>`,
        bindToController: {isBusy: '=isBusy'}
    };
};

export default directive;