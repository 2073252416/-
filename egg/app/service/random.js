'use strict';

const Service = require('egg').Service;

class RandomService extends Service {
  async get() {
    const rList = await this.app.model.Random.findAll();
    const biao = await this.app.model.Random.findAll({
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
    }) 
    return biao
    return rList    
  }

  async post() {
    let name = await this.ctx.request.body;
    const column = {
      name:name.name,
      danxua_id:name.id
    }
    await this.app.model.Random.create(column)

  }

  async delete(){
    let id = this.ctx.params.id
    const ran = await this.app.model.Random.findOne({
        where: {
            id: id
        }
    })
    const rans = await this.app.model.Random.findAll();
    ran.destroy()
    return rans    
  }
}

module.exports = RandomService;
