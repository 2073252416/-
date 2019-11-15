'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken'); // 引入 jsonwebtoken

class HomeController extends Controller {
    // async login() {
    //    const login = await this.ctx.service.user.login()
    //    this.ctx.body=login
    // }

    async zhuce(){
       await this.ctx.render('zhuce.html')
    }


    async create() {
        // const md5=require('md5-node');
        const body = this.ctx.request.body;
        
        const log = {
            name:body.username,
            // password:md5(body.password),
            password:body.password
        }
        await this.app.model.Log.create(log);
        this.ctx.redirect("/")
    }

    async state(){
        let name = this.ctx.request.body.name;
        let password = this.ctx.request.body.password; 
        if(await this.ctx.service.user.checkLogin(name,password)){
            const token = this.app.jwt.sign({
                name:name
            },this.app.config.jwt.secret);
            // this.cyx.cookies.set('token',token,{
            //     maxAge:10*1000,
            //     httpOnly:false,
            //     overwrite:false,
            //     signed:false,
            // });
            console.log(token);
            this.ctx.body = {
                code:2000,
                token:token
            };
        }else {
            this.ctx.body = {
                code:3000,
            }
        }
    }



    // async index() {
    //     const ctx = this.ctx;
        
    //     const token = jwt.sign({       
    //         name: 1,      
    //         password: ctx.request.body.name 
    //     }, 'shenzhouhaotian', { // 秘钥
    //         expiresIn: '60s' // 过期时间
    //     });
    //     ctx.body = {             // 返回给前端
    //       token: token
    //     };
    //     ctx.status = 200;           // 状态码 200
    //   }

    //   async indexs() {
    //     const ctx = this.ctx
    //     const authorization = ctx.get('Authorization');
    //     if (authorization === '') { // 判断请求头有没有携带 token ,没有直接返回 401
    //         ctx.throw(401, 'no token detected in http header "Authorization"');
    //     }
    //     const token = authorization.split('')[1];
    //     // console.log(token)
    //     let tokenContent;
    //     try {
    //         tokenContent = await jwt.verify(token, 'shenzhouhaotian');     //如果 token 过期或验证失败，将返回401
    //         console.log(tokenContent)
    //         ctx.body = tokenContent     // token有效，返回 userInfo ;同理，其它接口在这里处理对应逻辑并返回
    //     } catch (err) {
    //         ctx.throw(401, 'invalid token');
    //     }
    //   }
}

module.exports = HomeController;
