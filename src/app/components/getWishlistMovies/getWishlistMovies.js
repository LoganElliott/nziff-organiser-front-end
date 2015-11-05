'use strict';

import angular from 'angular';
import router from './router';
import getWishListMoviesService from './services/getWishListMovies-service-module';
import getWishListMoviesLanguageSelect from './directives/getWishListMovies-languageSelect/getWishListMovies-languageSelect-module'
import getWishListMoviesShareableLink from './directives/getWishListMovies-shareableLink/getWishListMovies-shareableLink-module';
import getWishListMoviesGetMovies from './directives/getWishListMovies-getMovies/getWishListMovies-getMovies-module';
import getWishListMoviesLoadingWheel from './directives/getWishListMovies-loadingWheel/getWishListMovies-loadingWheel-module';
import getWishListMoviesDisplayMovies from './directives/getWishListMovies-displayMovies/getWishListMovies-displayMovies-module';

let getMoviesModule = angular.module('component.getWishListMovies', [
        getWishListMoviesService.name,
        getWishListMoviesGetMovies.name,
        getWishListMoviesDisplayMovies.name,
        getWishListMoviesShareableLink.name,
        getWishListMoviesLoadingWheel.name,
        getWishListMoviesLanguageSelect.name
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

