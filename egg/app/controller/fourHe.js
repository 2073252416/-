'use strict';

const Controller = require('egg').Controller;

class FourHeController extends Controller {
    async get (){
        try{
            const four = await this.ctx.service.fourHe.get();
            this.ctx.body = {
              code:20000,
                data:four
            }
        }catch(error){
            this.ctx.body ={
            code: 30000,
                data: "失败"
            }
        }
    }
    // async post (){
    //     const fourname = this.ctx.request.body.name;
    //     if(await this.ctx.service.fourHe.post(fourname)){
    //         const names = await this.ctx.service.fourHe.findByld();
    //         this.ctx.body = {
    //             code:2000,
    //             data:names
    //         }
    //     }else{
    //         this.ctx.body = {
    //             code:3000,
    //             data:"失败"
    //         }
    //     }
    // }
    async post() {
        const fourname = await this.ctx.service.fourHe.post()
        this.ctx.body = fourname
    }
}

module.exports = FourHeController;
