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
<<<<<<< HEAD
<<<<<<< HEAD
      Choice_question:zhi.Choice_question,
=======
      Choice_question:zhi.jsons.arr.Choice_question,
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
=======
      Choice_question:zhi.jsons.arr.Choice_question,
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
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
<<<<<<< HEAD
<<<<<<< HEAD
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
    let putthree = this.ctx.request.body.putthree
    let putfour = this.ctx.request.body.putfour
    let puta = this.ctx.request.body.puta
    let putb = this.ctx.request.body.putb
    let putc = this.ctx.request.body.putc
    let putd = this.ctx.request.body.putd
    let putdifficulty = this.ctx.request.body.putdifficulty
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
=======
    let title = this.ctx.request.body.title
    let row = {
        title: title
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
=======
    let title = this.ctx.request.body.title
    let row = {
        title: title
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
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
