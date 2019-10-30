'use strict';

const Controller = require('egg').Controller;

class PaperController extends Controller {
  async get() {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    const paper = await this.ctx.service.paper.get();
    this.ctx.body = paper    
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
=======
    const paper = await this.ctx.service.paper.get();
    this.ctx.body = paper    
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
  }
  async post() {
    const paperposts = await this.ctx.service.paper.post();
    this.ctx.body = paperposts          
  }
<<<<<<< HEAD
<<<<<<< HEAD
  async delete() {
    const padelete = await this.ctx.service.paper.delete();
    this.ctx.body = padelete
    }
  async put() {
    const paput = await this.ctx.service.paper.put();
    this.ctx.body = paput    
  }
=======
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
=======
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
}

module.exports = PaperController;
