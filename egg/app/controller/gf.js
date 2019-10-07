'use strict';

const Controller = require('egg').Controller;

class GfController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async post() {
    const gfclass = await this.ctx.service.gf.post()
    this.ctx.body=gfclass
  }
}

module.exports = GfController;