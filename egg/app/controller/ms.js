'use strict';

const Controller = require('egg').Controller;

class MSController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async post() {
    const MSclass = await this.ctx.service.ms.post()
    this.ctx.body=MSclass
  }
}

module.exports = MSController;