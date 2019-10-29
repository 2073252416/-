'use strict';

const Controller = require('egg').Controller;

class PaperController extends Controller {
  async get() {
    const paper = await this.ctx.service.paper.get();
    this.ctx.body = paper    
  }
  async post() {
    const paperposts = await this.ctx.service.paper.post();
    this.ctx.body = paperposts          
  }
}

module.exports = PaperController;
