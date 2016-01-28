# nziff-organiser-front-end
The front end of my New Zealand International Film Festival movie organising tool

## How it works
- GUI provides an input field for a user to input their NZIFF wish list url e.g. www.nziff.co.nz/s/iDO/
- You then select the dates and start end dates for each day
- My GUI makes a request to my [API](http://www.loganelliott.xyz/api/getWishListJson/{wishListId}) for movies that fit your schedule 
- A list is then displayed of a schedule of seeing all your movies at your specified times

### Additional features
- Language translation for English, Mandarin and Maori
- Ability to share your movies schedule

# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`

## Installing
* `fork` this repo
* `clone` your fork
* `npm install -g gulp karma karma-cli webpack` install global cli dependencies
* `npm install` to install local dependencies

## Running
* `npm run start` to launch application browse to [http://localhost:4000/](http://localhost:4000/)

## Tests
* `npm run test` to run tests and test code coverage