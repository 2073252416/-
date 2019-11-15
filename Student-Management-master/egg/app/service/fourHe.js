'use strict';

const Service = require('egg').Service;

class FourHeService extends Service {
    async get(){
        try{
            const four = await this.app.model.FourHe
            const fours = await four.findAll({
                include :[
                    {model:this.app.model.Danxuan,
                    as:'danxua'},
                    {model:this.app.model.Ms,
                    as:'ms'},
                    {model:this.app.model.Gfz,
                      as:'gfz'},
                    {model:this.app.model.Saqz,
                      as:'saqz'},
                  ]            
            });
            return fours
        }catch(error){
            console.log(error);
            return false;    
        }
    };
    // async post(fourname){
    //     try{
    //        const books = {
    //            name:fourname
    //        }
    //        await this.app.model.fourHe.create(books) 
    //        return true;
    //     }catch(error){
    //         console.log(error);
    //         return false;
    //     }
    // }
    async post() {
        let names= await this.ctx.request.body;
        const add = {
            name:names.name,
        }
        await this.app.model.FourHe.create(add)
    }
}

module.exports = FourHeService;
