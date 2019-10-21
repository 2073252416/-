'use strict';

const Service = require('egg').Service;

class ShorService extends Service {
    async shorpost() {
        let name = await this.ctx.request.body;
        const sudent = {
            title:name.title,
            answer:name.answer,
            difficulty:name.difficulty

        }
        await this.app.model.Shorz.create(sudent)
    }
    async getshorlist() {
        const shorList = await this.app.model.Shorz.findAll();
        return shorList
    }
    async deleteshorlist() {
        let id = this.ctx.params.id
        const shors = await this.app.model.Shorz.findOne({
            where: {
                id: id
            } 
        })
       const shor = await this.app.model.Shorz.findAll();
        shors.destroy();
        return shor
    }
    async shorput() {
        let id = this.ctx.params.id
        let title = this.ctx.request.body.title
        let row = {
            title: title
        },
            options = {
                where: {
                    id: id
                }
            }
        await this.app.model.Shorz.update(row, options);
        const shorList = await this.app.model.Shorz.findAll();
        return shorList
    }
}

module.exports = ShorService;