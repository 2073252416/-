'use strict';

const Service = require('egg').Service;

class GfService extends Service {
    async post() {
        let name = await this.ctx.request.body;
        const sudent = {
            title:name.title,
            answer:name.answer,
            difficulty:name.difficulty

        }
        await this.app.model.Gfz.create(sudent)
    }
    async getgflist() {
        const gfList = await this.app.model.Gfz.findAll();
        return gfList
    }
    async deletegflist() {
        let id = this.ctx.params.id
        const gfs = await this.app.model.Gfz.findOne({
            where: {
                id: id
            } 
        })
       const gf = await this.app.model.Gfz.findAll();
        gfs.destroy();
        return gf
    }
    async gfput() {
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
        await this.app.model.Gfz.update(row, options);
        const gfList = await this.app.model.Gfz.findAll();
        return gfList
    }
}

module.exports = GfService;