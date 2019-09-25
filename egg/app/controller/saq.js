'use strict';

const Controller = require('egg').Controller;

class SaqController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async post() {
    const saqclass = await this.ctx.service.saq.post()
    this.ctx.body=saqclass
  }
}

module.exports = SaqController;