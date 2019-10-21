 'use strict';

const Service = require('egg').Service;

class DanxuanService extends Service {
    // 添加
    async post() {
        let name = await this.ctx.request.body;
        const add = {
            Choice_question:name.Choice_question,
            A:name.A,
            B:name.B,
            C:name.C,
            D:name.D,
            three:name.three,
            four:name. four,
        }
        await this.app.model.Danxuan.create(add)
        
    }
    // 查询
    async getdanxaunlist() {
        const danxuanList = await this.app.model.Danxuan.findAll();
        return danxuanList
    }
    // 删除
    async deletedanxuanlist() {
        let id = this.ctx.params.id
        const danxua = await this.app.model.Danxuan.findOne({
            where: {
                id: id
            }
        })
        const danxuas = await this.app.model.Danxuan.findAll();
        danxua.destroy()
        return danxuas
    }
    // 修改
    async danxuanlistput() {
        let id = this.ctx.params.id
        const putclazz = this.ctx.request.body.putclazz
        const putA = this.ctx.request.body.putA
        const putB = this.ctx.request.body.putB
        const putC = this.ctx.request.body.putC
        const putD = this.ctx.request.body.putD
        const putThree = this.ctx.request.body.putThree
        const putFlour = this.ctx.request.body.putFlour
        const putFraction = this.ctx.request.body.putFraction
        const putQuestion = this.ctx.request.body.putQuestion
        let row = {
            Choice_question:putclazz,
            A: putA,
            B:putB,
            C:putC,
            D:putD,
            three:putThree,
            four:putFlour,
            Fraction:putFraction,
            Question:putQuestion
        },
        options = {
            where:{
                id:id
            }
        }
        await this.app.model.Danxuan.update(row, options);
        const danxuas = await this.app.model.Danxuan.findAll();
        return danxuas
    } 
     // 联查学生信息
    //  async () {
    //     const studentList = await this.app.model.Students.findAll({
    //         include:[{  //联查班级的数据
    //             model:this.app.model.Clazz,
    //             as:'clazz'
    //         }]
    //     });
    //     await this.ctx.render('student_list.html', {
    //         studentList: studentList
    //     })
    // }
}

module.exports = DanxuanService;