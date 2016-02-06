'use strict';

class Controller {
    constructor() {
        this.urlRegex = new RegExp('(?:https?:\/\/)?(?:www\.)?nziff\.co\.nz\/(?:[0-9]{4}\/[a-z]+\/wishlist|s)\/([A-Za-z0-9]+)');
    }

    deconstructUrlWithRegex(wishListUrl){
        if(wishListUrl) {
            var matches = this.urlRegex.exec(wishListUrl);
            if (matches) {
                this.wishListId = matches[1];
                return;
            }
        }
        this.wishListId = '';
    }
}

export default Controller;
