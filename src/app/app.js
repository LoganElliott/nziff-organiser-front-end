'use strict';

import './styles/app.css!';
import angular from 'angular';
import 'angular-touch';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages'
import 'angular-ui-router';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import getWishListMovies from './components/getWishListMovies/getWishListMovies';

let app = angular.module('app', [
    'ngTouch',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMessages',
    'ui.router',
    'pascalprecht.translate',
    getWishListMovies.name
]);

app.config(['$mdThemingProvider','$urlRouterProvider', '$locationProvider','$translateProvider', ($mdThemingProvider, $urlRouterProvider, $locationProvider,$translateProvider) => {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {'default': '900'})
        .accentPalette('blue-grey',{'default': '900'})
        .warnPalette('red',{'default': '900'});

    $translateProvider.useSanitizeValueStrategy('escape');

    $translateProvider.useStaticFilesLoader({
        prefix: '/assets/languages/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('en-NZ');

}]);

angular.element(document).ready(function () {

    console.log('app.js :: Bootstrapping the application.');

    angular.bootstrap(document, ['app'], {
        // Enable strict dependency injection mode (throws error, rather than fail silently)
        strictDi: true
    } );

    // Bootstrap complete:
    if (console && typeof console.time !== 'undefined') { console.timeEnd('App Startup Time'); }

} );
