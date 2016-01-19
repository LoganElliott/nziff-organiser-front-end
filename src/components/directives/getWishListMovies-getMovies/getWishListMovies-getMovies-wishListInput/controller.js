'use strict';
import _ from 'lodash';

class Controller {
    constructor(getWishListMoviesService) {
        this.getWishListMoviesService = getWishListMoviesService;
        this.wishListUrl = '';
        this.urlRegex = new RegExp('(?:https?:\/\/)?(?:www\.)?nziff\.co\.nz\/(?:[0-9]{4}\/[a-z]+\/wishlist|s)\/([A-Za-z0-9]+)');
        if(this.getWishListMoviesService.wishListId != null && this.getWishListMoviesService.wishListId != ''){
            this.wishListUrl = 'http://www.nziff.co.nz/s/' + this.getWishListMoviesService.wishListId;
        }
    }

    deconstructUrlWithRegex(){
        if(this.wishListUrl != null) {
            this.getWishListMoviesService.wishListId= this.deconstructUrl(this.urlRegex,this.wishListUrl);
        }
    }

    deconstructUrl(urlRegex,wishListUrl){
        var matches = urlRegex.exec(wishListUrl);
        if (matches == null) {
            throw new Error('Url is not valid');
        }
        var wishListId = matches[1];
        return wishListId;
    }
}

Controller.$inject = ['getWishListMoviesService'];

export default Controller;
