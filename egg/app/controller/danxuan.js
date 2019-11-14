'use strict';

const Controller = require('egg').Controller;

class DanxuanController extends Controller {
  //添加试题
    async post() {
      const danxuanlast = await this.ctx.service.danxuan.post()
      this.ctx.body = danxuanlast
    }
  //查询试题
    async get (){
    try{
      const danxuass = await this.ctx.service.danxuan.getdanxaunlist();
      this.ctx.body = {
          code:20000,
            data:danxuass
      }
      }catch(error){
          this.ctx.body ={
          code: 30000,
            data: "失败"
          }
      }
    }
// 删除试题
    async destroy() {
      const studentList = await this.ctx.service.danxuan.deletedanxuanlist();
      this.ctx.body = studentList
    }
    // 修改
    async put() {
      const studentList = await this.ctx.service.danxuan.danxuanlistput();
      this.ctx.body = studentList
    }    
}

module.exports = DanxuanController;