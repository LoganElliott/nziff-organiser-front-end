'use strict';

class Controller {
    constructor($translate) {
        this.language = {
            languages: [
                {name: 'English', code: 'en-NZ'},
                {name: 'Te Reo', code: 'mi-NZ'},
                {name: '中文', code: 'zh-CN'}
            ],
            defaultLanguage: 'en-NZ'
        };
        this.$translate = $translate;
        this.$translate.use(this.language.defaultLanguage);
    }

    changeLanguage() {
        this.$translate.use(this.currentLanguage);
    }
}

Controller.$inject = ['$translate'];

export default Controller;

