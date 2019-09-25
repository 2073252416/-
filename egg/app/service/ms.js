'use strict';

const Service = require('egg').Service;

class MsService extends Service {
    async post() {
        let name = await this.ctx.request.body;
        const sudent = {
            title:name.title,
            one:name.one,
            two:name.two,
            three:name.three,
            four:name.four,
            a:name.a,
            b:name.b,
            c:name.c,
            d:name.d,
            difficulty:name.difficulty,
        }
        await this.app.model.Ms.create(sudent)
        // if(a==1){
        //     a=a
        // }
    }
}

module.exports = MsService;