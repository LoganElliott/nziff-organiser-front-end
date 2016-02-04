'use strict';

import './app.scss';
import angular from 'angular';
import 'angular-material/angular-material.css';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages'
import 'angular-ui-router';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import getWishListMovies from './components/getWishListMovies.module.js';

let app = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMessages',
    'ui.router',
    'pascalprecht.translate',
    getWishListMovies.name
]);

app.config(['$mdThemingProvider','$urlRouterProvider', '$locationProvider','$translateProvider','$stateProvider', ($mdThemingProvider, $urlRouterProvider, $locationProvider,$translateProvider,$stateProvider) => {

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

    $stateProvider.state('getWishListMovies', {
        url: '/',
        template:`<d-nziffo-movies></d-nziffo-movies>`
    });

}]);

var baseWebsiteUrl = 'http://www.loganelliott.xyz';
app.constant('config',{
    apiUrl: baseWebsiteUrl + '/api',
    nziffoUrl: baseWebsiteUrl + '/nziffo',
    dayFilterDefaults: [
        {dayOfWeek: 'Sunday', allowedDay: true,minStartTime:0,maxEndTime: 0},
        {dayOfWeek: 'Saturday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
        {dayOfWeek: 'Friday', allowedDay: true,minStartTime: 0,maxEndTime:0},
        {dayOfWeek: 'Thursday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
        {dayOfWeek: 'Wednesday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
        {dayOfWeek: 'Tuesday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
        {dayOfWeek: 'Monday' , allowedDay: true,minStartTime: 0,maxEndTime: 0}
    ],
    languages:[
        { name: 'English', code: 'en-NZ' },
        { name: 'Te Reo', code: 'mi-NZ' },
        { name: '中文', code: 'zh-CN' }
    ]});

angular.element(document).ready(function () {

    console.log('app.js :: Bootstrapping the application.');

    angular.bootstrap(document, ['app'], {
        // Enable strict dependency injection mode (throws error, rather than fail silently)
        strictDi: true
    } );

    // Bootstrap complete:
    if (console && typeof console.time !== 'undefined') { console.timeEnd('App Startup Time'); }

} );
