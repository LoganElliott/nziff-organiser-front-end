'use strict';

import router from './router';
import getWishListMoviesService from './services/getWishListMovies-service-module';
import languageSelect from './directives/languageSelect/languageSelect.module'
import getWishListMoviesGetMovies from './directives/getMovies/getWishListMovies-getMovies-module';
import loadingWheel from './directives/LoadingWheel/loadingWheel.module';
import displayMovies from './directives/displayMovies/displayMovies.module';

let getMoviesModule = angular.module('component.getWishListMovies', [
    getWishListMoviesService.name,
    getWishListMoviesGetMovies.name,
    displayMovies.name,
    loadingWheel.name,
    languageSelect.name
]);

var baseWebsiteUrl = 'http://www.loganelliott.xyz';
getMoviesModule.constant('config',{
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

getMoviesModule.config(router);

export default getMoviesModule;

