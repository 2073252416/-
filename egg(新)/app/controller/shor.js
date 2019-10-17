'use strict';

const Controller = require('egg').Controller;

class ShorController extends Controller {
  async shorpost() {
    const shorlast = await this.ctx.service.shor.shorpost()
    this.ctx.body = shorlast
  }
     async shorget (){
     const shorlast = await this.ctx.service.shor.getshorlist()
     this.ctx.body=shorlast
   }
   async shordelete(){
    const shorlast = await this.ctx.service.shor.deleteshorlist();
        this.ctx.body = shorlast
   }
    async shorupdate() {
        const shorlast = await this.ctx.service.shor.shorput();
        this.ctx.body = shorlast
    }
}

module.exports = ShorController;
