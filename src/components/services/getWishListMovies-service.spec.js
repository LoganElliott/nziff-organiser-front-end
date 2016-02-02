'use strict';

import getWishListMoviesServiceModule from './getWishListMovies-service-module';

describe('Get wish list movies - service', function(){
    let httpBackend;
    let config;
    let location;
    let getWishListMoviesService;
    let defaultDayFilters = {dayFilterDefaults: [
        {dayOfWeek: 'Sunday', allowedDay: true,minStartTime:0,maxEndTime: 0},
        {dayOfWeek: 'Saturday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
        {dayOfWeek: 'Friday', allowedDay: true,minStartTime: 0,maxEndTime:0},
        {dayOfWeek: 'Thursday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
        {dayOfWeek: 'Wednesday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
        {dayOfWeek: 'Tuesday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
        {dayOfWeek: 'Monday' , allowedDay: true,minStartTime: 0,maxEndTime: 0}
    ]};

    beforeEach(function(){
        angular.mock.module(getWishListMoviesServiceModule.name);
    });

    beforeEach(function() {
        angular.mock.module(function($provide) {
            $provide.constant('config', defaultDayFilters);
        });
    });

    beforeEach(function(){
        angular.mock.inject((_$httpBackend_,_config_,_$location_,_getWishListMoviesService_) => {
            httpBackend = _$httpBackend_;
            config = _config_;
            location = _$location_;
            getWishListMoviesService = _getWishListMoviesService_;
        })
    });

    it('should convert a simple reduced url state into the correct json object', function () {
        var urlState = '~(wishListId~\'iDO~dayFilters~(~(dayOfWeek~\'Sunday~allowedDay~false)~(dayOfWeek~\'Tuesday~maxEndTime~46740000)~(dayOfWeek~\'Monday~minStartTime~3600000)))"';
        getWishListMoviesService.deconstructQueryData(urlState);
        var deconstructedJson = getWishListMoviesService.dayFilters;
        var expectedJson =   [
            {"dayOfWeek":"Sunday","allowedDay":false,"minStartTime":0,"maxEndTime":0},
            {"dayOfWeek":"Saturday","allowedDay":true,"minStartTime":0,"maxEndTime":0},
            {"dayOfWeek":"Friday","allowedDay":true,"minStartTime":0,"maxEndTime":0},
            {"dayOfWeek":"Thursday","allowedDay":true,"minStartTime":0,"maxEndTime":0},
            {"dayOfWeek":"Wednesday","allowedDay":true,"minStartTime":0,"maxEndTime":0},
            {"dayOfWeek":"Tuesday","allowedDay":true,"minStartTime":0,"maxEndTime":"1969-12-31T23:59:00.000Z"},
            {"dayOfWeek":"Monday","allowedDay":true,"minStartTime":"1969-12-31T12:00:00.000Z","maxEndTime":0}
        ];
        expect(JSON.stringify(deconstructedJson)).toBe(JSON.stringify(expectedJson));
    });

    it('should convert a complex reduced url state into the correct json object', function () {
        var urlState = '~(wishListId~\'iDO~dayFilters~(~(dayOfWeek~\'Sunday~maxEndTime~46740000)~(dayOfWeek~\'Saturday~allowedDay~false~maxEndTime~46740000)~(dayOfWeek~\'Friday~allowedDay~false)~(dayOfWeek~\'Thursday~allowedDay~false~minStartTime~3600000~maxEndTime~3600000)~(dayOfWeek~\'Wednesday~minStartTime~3600000~maxEndTime~3600000)~(dayOfWeek~\'Tuesday~maxEndTime~3600000)~(dayOfWeek~\'Monday~minStartTime~3600000)))';
        getWishListMoviesService.deconstructQueryData(urlState);
        var deconstructedJson = getWishListMoviesService.dayFilters;
        var expectedJson =   [
                                {"dayOfWeek":"Sunday","allowedDay":true,"minStartTime":0,"maxEndTime":"1969-12-31T23:59:00.000Z"},
                                {"dayOfWeek":"Saturday","allowedDay":false,"minStartTime":0,"maxEndTime":"1969-12-31T23:59:00.000Z"},
                                {"dayOfWeek":"Friday","allowedDay":false,"minStartTime":0,"maxEndTime":0},
                                {"dayOfWeek":"Thursday","allowedDay":false,"minStartTime":"1969-12-31T12:00:00.000Z","maxEndTime":"1969-12-31T12:00:00.000Z"},
                                {"dayOfWeek":"Wednesday","allowedDay":true,"minStartTime":"1969-12-31T12:00:00.000Z","maxEndTime":"1969-12-31T12:00:00.000Z"},
                                {"dayOfWeek":"Tuesday","allowedDay":true,"minStartTime":0,"maxEndTime":"1969-12-31T12:00:00.000Z"},
                                {"dayOfWeek":"Monday","allowedDay":true,"minStartTime":"1969-12-31T12:00:00.000Z","maxEndTime":0}
                             ];
        expect(JSON.stringify(deconstructedJson)).toBe(JSON.stringify(expectedJson));
    });

    it('should adjust the filters dates', function(){
        var rawFilterOutput = [{"dayOfWeek":"Sunday","allowedDay":true,"minStartTime":0,"maxEndTime":0},{"dayOfWeek":"Saturday","allowedDay":true,"minStartTime":0,"maxEndTime":0},{"dayOfWeek":"Friday","allowedDay":true,"minStartTime":0,"maxEndTime":0},{"dayOfWeek":"Thursday","allowedDay":true,"minStartTime":0,"maxEndTime":0},{"dayOfWeek":"Wednesday","allowedDay":true,"minStartTime":new Date("1969-12-31T23:59:00.000Z"),"maxEndTime":new Date("1969-12-31T12:00:00.000Z")},{"dayOfWeek":"Tuesday","allowedDay":true,"minStartTime":0,"maxEndTime":new Date("1969-12-31T23:59:00.000Z")},{"dayOfWeek":"Monday","allowedDay":true,"minStartTime":new Date("1969-12-31T12:00:00.000Z"),"maxEndTime":0}];
        var expected = '[{"dayOfWeek":"Sunday","allowedDay":true,"minStartTime":0,"maxEndTime":86400000},{"dayOfWeek":"Saturday","allowedDay":true,"minStartTime":0,"maxEndTime":86400000},{"dayOfWeek":"Friday","allowedDay":true,"minStartTime":0,"maxEndTime":86400000},{"dayOfWeek":"Thursday","allowedDay":true,"minStartTime":0,"maxEndTime":86400000},{"dayOfWeek":"Wednesday","allowedDay":true,"minStartTime":46740000,"maxEndTime":3600000},{"dayOfWeek":"Tuesday","allowedDay":true,"minStartTime":0,"maxEndTime":46740000},{"dayOfWeek":"Monday","allowedDay":true,"minStartTime":3600000,"maxEndTime":86400000}]';
        var result = JSON.stringify(getWishListMoviesService.fixFilterTimeZones(rawFilterOutput));
        expect(result).toBe(expected);
    });
});
