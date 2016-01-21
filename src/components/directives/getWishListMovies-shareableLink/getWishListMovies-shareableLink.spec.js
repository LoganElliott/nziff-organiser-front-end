'use strict';


import getWishListMoviesShareableLinkModule from './getWishListMovies-shareableLink-module';
import Controller from './controller';

describe('Get wish list movies - get movies', function(){
    let shareableLinkController;
    let mockConfig = {nziffoUrl: 'http://loganelliott.xyz' + '/nziffo',
        dayFilterDefaults: [
            {dayOfWeek: 'Sunday', allowedDay: true,minStartTime:0,maxEndTime: 0},
            {dayOfWeek: 'Saturday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
            {dayOfWeek: 'Friday', allowedDay: true,minStartTime: 0,maxEndTime:0},
            {dayOfWeek: 'Thursday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
            {dayOfWeek: 'Wednesday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
            {dayOfWeek: 'Tuesday', allowedDay: true,minStartTime: 0,maxEndTime: 0},
            {dayOfWeek: 'Monday' , allowedDay: true,minStartTime: 0,maxEndTime: 0}
        ]};
    let mockService = {wishListId : 'iDO',dayFilters : [{"dayOfWeek":"Sunday","allowedDay":true,"minStartTime":0,"maxEndTime":0,"$$hashKey":"object:13"},{"dayOfWeek":"Saturday","allowedDay":true,"minStartTime":0,"maxEndTime":0,"$$hashKey":"object:14"},{"dayOfWeek":"Friday","allowedDay":true,"minStartTime":0,"maxEndTime":0,"$$hashKey":"object:15"},{"dayOfWeek":"Thursday","allowedDay":false,"minStartTime":0,"maxEndTime":0,"$$hashKey":"object:16"},{"dayOfWeek":"Wednesday","allowedDay":true,"minStartTime": new Date("1969-12-31T23:59:00.000Z"),"maxEndTime": new Date("1969-12-31T12:00:00.000Z"),"$$hashKey":"object:17"},{"dayOfWeek":"Tuesday","allowedDay":true,"minStartTime":0,"maxEndTime": new Date("1969-12-31T23:59:00.000Z"),"$$hashKey":"object:18"},{"dayOfWeek":"Monday","allowedDay":true,"minStartTime": new Date("1969-12-31T12:00:00.000Z"),"maxEndTime":0,"$$hashKey":"object:19"}]};

    beforeEach(function(){
        angular.mock.module(getWishListMoviesShareableLinkModule.name);
    });

    beforeEach(function(){
        shareableLinkController = new Controller({},mockConfig,{wishListId: ''});
    });

    it('should remove default states from filters', function(){
        var expected = '[{"dayOfWeek":"Thursday","allowedDay":false},{"dayOfWeek":"Wednesday","minStartTime":46740000,"maxEndTime":3600000},{"dayOfWeek":"Tuesday","maxEndTime":46740000},{"dayOfWeek":"Monday","minStartTime":3600000}]';
        var result = shareableLinkController.removeDefaultFilterStates(mockService.dayFilters,mockConfig.dayFilterDefaults);
        expect(JSON.stringify(result)).toBe(expected);
    });
});