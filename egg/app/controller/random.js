'use strict';

const Controller = require('egg').Controller;

class RandomController extends Controller {
    async get() {
        const rlists = await this.ctx.service.random.get()
        this.ctx.body = rlists
    }

    async post(){
        const rclass =  await this.ctx.service.random.post()
        this.ctx.body = rclass
    }
    async rdelete() {
        const rdeletes = await this.ctx.service.random.delete();
        this.ctx.body = rdeletes           
    }
}

module.exports = RandomController;
