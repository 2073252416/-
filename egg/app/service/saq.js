'use strict';

const Service = require('egg').Service;

class SaqService extends Service {
    async post() {
        let name = await this.ctx.request.body;
        const sudent = {
            title:name.title,
            answer:name.answer,
            difficulty:name.difficulty

        }
        await this.app.model.Saqz.create(sudent)
    }
    async getsaqlist() {
        const saqList = await this.app.model.Saqz.findAll();
        return saqList
    }
    async saqput() {
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
        await this.app.model.Saqz.update(row, options);
        const saqList = await this.app.model.Saqz.findAll();
        return saqList
    }
    async deletesaqlist() {
        let id = this.ctx.params.id
        const shors = await this.app.model.Saqz.findOne({
            where: {
                id: id
            } 
        })
       const saq = await this.app.model.Saqz.findAll();
        shors.destroy();
        return saq
    }
}

module.exports = SaqService;