'use strict';

const Service = require('egg').Service;

class RandomService extends Service {
  async get() {
    const rList = await this.app.model.Random.findAll();
    return rList    
  }
}

module.exports = RandomService;
