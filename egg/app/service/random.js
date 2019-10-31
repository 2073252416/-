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
    var json = zhi.lists;
    for(var i = 0;i<json.length;i++){
      const columns = {
        Choice_question:json[i].Choice_question,
        A:json[i].A,
        B:json[i].B,
        C:json[i].C,
        D:json[i].D,
        three:json[i].three,
        four:json[i].four,

        title:json[i].title,
        one:json[i].one,
        two:json[i].two,
        three:json[i].three,
        four:json[i].four,
        a:json[i].a,
        b:json[i].b,
        c:json[i].c,
        d:json[i].d,
        difficulty:json[i].difficulty,

        title:json[i].title,
        answer:json[i].answer,
        difficulty:json[i].difficulty,

        paper_id:json[i].paper_id,
      }
    await this.app.model.Random.create(columns);
    }
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
    let putChoice_question = this.ctx.request.body.putChoice_question
    let putA = this.ctx.request.body.putA
    let putB = this.ctx.request.body.putB
    let putC = this.ctx.request.body.putC
    let putD = this.ctx.request.body.putD
    let putthree = this.ctx.request.body.putthree
    let putfour = this.ctx.request.body.putfour
    let puttitle = this.ctx.request.body.puttitle
    let putone = this.ctx.request.body.putone
    let puttwo = this.ctx.request.body.puttwo
    let puta = this.ctx.request.body.puta
    let putb = this.ctx.request.body.putb
    let putc = this.ctx.request.body.putc
    let putd = this.ctx.request.body.putd
    let puttitle = this.ctx.request.body.puttitle
    let putanswer = this.ctx.request.body.putanswer
    let putdifficulty = this.ctx.request.body.putdifficulty
    let putpaper_id = this.ctx.request.body.putpaper_id

    let row = {
        Choice_question:putChoice_question,
        A:putA,
        B:putB,
        C:putC,
        D:putD,
        three:putthree,
        four:putfour,
  
        title:puttitle,
        one:putone,
        two:puttwo,
        three:putthree,
        four:putfour,
        a:puta,
        b:putb,
        c:putc,
        d:putd,
        difficulty:putdifficulty,
  
        title:puttitle,
        answer:putanswer,
        difficulty:putdifficulty,
  
        paper_id:putpaper_id,
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
