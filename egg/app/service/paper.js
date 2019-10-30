'use strict';

const Service = require('egg').Service;

class PaperService extends Service {
  async get() {
    // const paper = await this.app.model.Paper.findAll();
<<<<<<< HEAD
<<<<<<< HEAD
    try{
      const  paLists = await this.app.model.Paper
      const  paperss = await paLists.findAll({
        include:[{
          model: this.app.model.Random,  
          as:'papers'      
        }]
      });
      return paperss
    }catch (error) {
      console.log(error);
      return false;
    }    
=======
=======
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
    const papers = await this.app.model.Paper.findAll({
      include:[{
        model: this.app.model.Random,  
        as:'papers'      
      }]
    });        
    return papers
    // return paper    
<<<<<<< HEAD
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
=======
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
  }
  async post() {
    let names = await this.ctx.request.body;

    const niurong = {
        name:names.name
    }
    await this.app.model.Paper.create(niurong)
  }
<<<<<<< HEAD
<<<<<<< HEAD
  async delete() {
    let id = this.ctx.params.id
    const paper = await this.app.model.Paper.findOne({
        where: {
            id: id
        }
    })
    const papers = await this.app.model.Paper.findAll();
    paper.destroy()
    return papers
  }
  async put() {
    let id = this.ctx.params.id
    const name = this.ctx.request.body.name
    let row = {
        name:name,
    },
    options = {
        where:{
            id:id
        }
    }
    await this.app.model.Paper.update(row, options);
    const pas = await this.app.model.Paper.findAll();
    return pas
  }
=======
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
=======
>>>>>>> 793cf6785e6bf3e3a8ee1bcd6bd2693ec429470c
}

module.exports = PaperService;
