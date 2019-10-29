'use strict';

const Service = require('egg').Service;

class RandomService extends Service {
  async get() {
    try{
      const  rLists = await this.app.model.Random
      const  result = await rLists.findAll();
      return  result
    }catch (error) {
      console.log(error);
      return false;
    }
  }                 
  async post() {
    let zhi = await this.ctx.request.body;
    console.log(zhi);
    const columns = {
      Choice_question:zhi.jsons.arr.Choice_question,
      A:zhi.A,
      B:zhi.B,
      C:zhi.C,
      D:zhi.D,
      three:zhi.three,
      four:zhi.four,

      title:zhi.title,
      one:zhi.one,
      two:zhi.two,
      three:zhi.three,
      four:zhi.four,
      a:zhi.a,
      b:zhi.b,
      c:zhi.c,
      d:zhi.d,
      difficulty:zhi.difficulty,

      title:zhi.title,
      answer:zhi.answer,
      difficulty:zhi.difficulty,

      paper_id:zhi.paper_id,
    }
    await this.app.model.Random.create(columns);
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
  
  async rput() {
    let id = this.ctx.params.id
    let title = this.ctx.request.body.title
    let row = {
        title: title
    },
        options = {
            where: {
                id: id
            }
        }
    await this.app.model.Random.update(row, options);
    const rList = await this.app.model.Random.findAll();
    return rList
}
}

module.exports = RandomService;
