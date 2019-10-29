'use strict';

const Service = require('egg').Service;

class PaperService extends Service {
  async get() {
    // const paper = await this.app.model.Paper.findAll();
    const papers = await this.app.model.Paper.findAll({
      include:[{
        model: this.app.model.Random,  
        as:'papers'      
      }]
    });        
    return papers
    // return paper    
  }
  async post() {
    let names = await this.ctx.request.body;

    const niurong = {
        name:names.name
    }
    await this.app.model.Paper.create(niurong)
  }
}

module.exports = PaperService;
