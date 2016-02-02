'use strict';
import angular from 'angular';
import 'angular-mocks';

import getWishListMoviesGetMoviesModule from './getWishListMovies-getMovies-wishListInput-module';
import Controller from './controller';

let urlRegex = new RegExp('(?:https?:\/\/)?(?:www\.)?nziff\.co\.nz\/(?:[0-9]{4}\/[a-z]+\/wishlist|s)\/([A-Za-z0-9]+)');

describe('Get wish list movies - get movies test controller', function(){
    let getMoviesController;

    beforeEach(function(){
        angular.mock.module(getWishListMoviesGetMoviesModule.name);
    });

    beforeEach(function(){
        getMoviesController = new Controller({wishListId:''});
        getMoviesController.wishListUrl ='http://www.nziff.co.nz/s/iDO/';
    });

    it('should get the wish list id from string', function(){
        var correctUrls = ['http://www.nziff.co.nz/s/iDO/','https://www.nziff.co.nz/s/iDO/','www.nziff.co.nz/s/iDO/','http://nziff.co.nz/s/iDO/','https://nziff.co.nz/s/iDO/','http://www.nziff.co.nz/2015/auckland/wishlist/iDO','https://www.nziff.co.nz/2015/auckland/wishlist/iDO','www.nziff.co.nz/2015/auckland/wishlist/iDO','http://nziff.co.nz/2015/auckland/wishlist/iDO','http://nziff.co.nz/2015/auckland/wishlist/iDO'];
        for(var i=0;i < correctUrls.length;i++) {
           expect(getMoviesController.deconstructUrl(urlRegex,correctUrls[i])).toBe('iDO');
        }
    });

    it('should reject incorrect url strings', function(){
        var incorrectUrls = ['http://www.nziff.co.nz/d/iDO','thisIsNotAValidUrl','http://www.notCorrectWebsite.co.nz/s/iDO','http://www.nziff.co.nz/thisShouldBeANumber/auckland/wishlist/iDO','http://www.nziff.co.nz/2015/01234thisShouldBeOnlyLetters01234/wishlist/iDO']
        for(var i=0;i < incorrectUrls.length;i++) {
            expect(function(){getMoviesController.deconstructUrl(urlRegex,incorrectUrls[i])}).toThrowError(Error,'Url is not valid');
        }
    });
});

describe('Get wish list movies - get movies test directives', function(){
    let element, scope,translate;

    beforeEach(function(){
        angular.mock.module(getWishListMoviesGetMoviesModule.name,function ($provide) {
            $provide.value('translateFilter',
                function(value) {
                    if(value === "inputTextPatternError"){
                        return 'Please copy the url wish list exactly';
                    } else if(value === "eg") {
                        return 'e.g';
                    }
                    return '';
                }
            );
            $provide.provider('$translate', function() {
                this.$get = function () {
                    return {
                        translate: function () {
                            return '';
                        }
                    };
                }
            });
        });
    });

    beforeEach(() => {
        var getWishListMoviesServiceMock = function () {
        };


        angular.mock.module(($provide) => {
            $provide.value('getWishListMoviesService', getWishListMoviesServiceMock);
        });

        angular.mock.inject(function ($compile, $rootScope,$translate) {
            scope = $rootScope.$new();
            element = $compile('<d-get-wish-list-movies-get-movies-wish-list-input></d-get-wish-list-movies-get-movies-wish-list-input>')(scope);
            translate = $translate;
        });
    });

    it('should show up pattern failed error message', function(){
        scope.wishListInput = {deconstructUrlWithRegex: function(){},urlRegex: urlRegex,wishListUrl: 'thisIsAIncorrectUrl'};
        scope.$digest();
        var thing = element[0].querySelector('.pattern-not-meet').innerText;
        expect(thing).toBe('Please copy the url wish list exactly e.g http://www.nziff.co.nz/s/iDO');
    });
});