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
            FourHe_id:name.FourHe_id
        }
        await this.app.model.Danxuan.create(add)
    }
    // 查询
    async getdanxaunlist() {
        try{
            const  danxuanList = await this.app.model.Danxuan
            const  danxuanLists = await danxuanList.findAll();
            return danxuanLists
          }catch (error) {
            console.log(error);
            return false;
          }
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
        const putA = this.ctx.request.body.putclazz2
        const putB = this.ctx.request.body.putclazz3
        const putC = this.ctx.request.body.putclazz4
        const putD = this.ctx.request.body.putclazz5
        const putThree = this.ctx.request.body.putclazz6
        const putFlour = this.ctx.request.body.putclazz7
        let row = {
            Choice_question:putclazz,
            A: putA,
            B:putB,
            C:putC,
            D:putD,
            three:putThree,
            four:putFlour,
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