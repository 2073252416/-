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
}

module.exports = GfService;