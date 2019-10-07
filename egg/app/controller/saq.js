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
  async saqget (){
    const saqlist = await this.ctx.service.saq.getsaqlist()
    this.ctx.body=saqlist
  }
  async saqput() {
    const saqlist = await this.ctx.service.saq.saqput();
    this.ctx.body = saqlist
}
  async saqdelete(){
   const saqlist = await this.ctx.service.saq.deletesaq();
      this.ctx.body = saqlist
 }
}

module.exports = SaqController;