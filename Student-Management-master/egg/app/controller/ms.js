'use strict';

const Controller = require('egg').Controller;

class MSController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   ctx.body = 'hi, egg';
  // }
  // 添加试题
  async post() {
    const MSclass = await this.ctx.service.ms.post()
    this.ctx.body = MSclass
  }
  async get (){
    const mslists = await this.ctx.service.ms.get()
    this.ctx.body = mslists
  }
  async destroy(){
    const mslist = await this.ctx.service.ms.delete();
    this.ctx.body = mslist    
  }
  async put(){
    const mslist = await this.ctx.service.ms.put();
    this.ctx.body = mslist    
  }
}

module.exports = MSController;