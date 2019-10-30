'use strict';

const Controller = require('egg').Controller;

class PaperController extends Controller {
  async get() {
    try{
      const paper = await this.ctx.service.paper.get();
      this.ctx.body = {
          code:20000,
            data:paper
      }
      }catch(error){
          this.ctx.body ={
          code: 30000,
            data: "失败"
          }
      }
  }
  async post() {
    const paperposts = await this.ctx.service.paper.post();
    this.ctx.body = paperposts          
  }
  async delete() {
    const padelete = await this.ctx.service.paper.delete();
    this.ctx.body = padelete
    }
  async put() {
    const paput = await this.ctx.service.paper.put();
    this.ctx.body = paput    
  }
}

module.exports = PaperController;
