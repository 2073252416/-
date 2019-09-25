'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login() {
        // const md5=require('md5-node'); 
        let name = this.ctx.request.body.name;
        let password = this.ctx.request.body.password
        let log = await this.app.model.Log.findOne({
            where:{
                name:name,  
            }
        });
        if(log == null){
            this.ctx.body = "用户不存在";
            return"用户不存在"
        }
        // 判断密码是否正确，正确则登录成功
        if(password == log.password){
            // this.ctx.session.user = user;  //设置session
            return"登录成功"    
        }else{
            return"密码错误"
        }
    }
}

module.exports = UserService;
