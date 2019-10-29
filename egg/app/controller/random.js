'use strict';

const Controller = require('egg').Controller;

class RandomController extends Controller {
    async get() {
        try{
            const rlists = await this.ctx.service.random.get();
            this.ctx.body = {
                code:20000,
                data:rlists
            }
            }catch(error){
                this.ctx.body ={
                code: 30000,
                data: "失败"
                }
            }
        }
    async post(){
        const rclass =  await this.ctx.service.random.post()
        this.ctx.body = rclass
    }
    async rdelete() {
        const rdeletes = await this.ctx.service.random.delete();
        this.ctx.body = rdeletes           
    }
    async rput() {
        const rlist = await this.ctx.service.random.rput();
        this.ctx.body = rlist
    }    
}
module.exports = RandomController;
