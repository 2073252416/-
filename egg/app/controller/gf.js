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
  async gfget (){
    const gflist = await this.ctx.service.gf.getgflist()
    this.ctx.body=gflist
  }
  async gfdelete(){
    const gfList = await this.ctx.service.gf.deletegflist();
        this.ctx.body = gfList
   }
   async gfupdate() {
    const gfList = await this.ctx.service.gf.gfput();
    this.ctx.body = gfList
}
}

module.exports = GfController;