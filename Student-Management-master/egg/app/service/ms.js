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
            FourHe_id:name.FourHe_id
        }
        await this.app.model.Ms.create(sudent)
    }
    async get() {
        const msList = await this.app.model.Ms.findAll();
        return msList
    }
    async delete(){
        let id = this.ctx.params.id
        const duoxuan = await this.app.model.Ms.findOne({
            where: {
                id: id
            }
        })
        const duoxuans = await this.app.model.Ms.findAll();
        duoxuan.destroy()
        return duoxuans        
    }
    async put(){
        let id = this.ctx.params.id
        const putclazz = this.ctx.request.body.putclazz
        const putclazz1 = this.ctx.request.body.putclazz1
        const putclazz2 = this.ctx.request.body.putclazz2
        const putclazz3 = this.ctx.request.body.putclazz3
        let row = {
            one: putclazz,
            two:putclazz1,
            three:putclazz2,
            four:putclazz3,
        },
        options = {
            where:{
                id:id
            }
        }
        await this.app.model.Ms.update(row, options);
        const duoxuas = await this.app.model.Ms.findAll();
        return duoxuas        
    }
}

module.exports = MsService;