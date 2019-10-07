'use strict';

const Controller = require('egg').Controller;

class RandomController extends Controller {
    async get() {
        const rlists = await this.ctx.service.random.get()
        this.ctx.body = rlists
    }
}

module.exports = RandomController;
