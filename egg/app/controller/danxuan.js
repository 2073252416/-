'use strict';

const Controller = require('egg').Controller;

class DanxuanController extends Controller {
  //添加试题
    async post() {
      const danxuanlast = await this.ctx.service.danxuan.post()
      this.ctx.body = danxuanlast
    }
  //查询试题
    // async delete() {  
    //     const danxuanlist = await this.app.model.Danxuan.findAll();//查询数据库中Clazz.
    //     await this.ctx.render('danxuan_list', {
    //         danxuanList: danxuanlist//将记录标题'Hello World'插入'posts'表
    //         //查询条件和结果自定义
    //     })
    // }
    async get (){
      const danxuanlist = await this.ctx.service.danxuan.getdanxaunlist()
      this.ctx.body=danxuanlist
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