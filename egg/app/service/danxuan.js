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
    // async getdanxaunlist() {
    //     const danxuanList = await this.app.model.Danxuan.findAll();
    //     return danxuanList
    // }
    // 删除
    // async deletedanxuanlist() {
    //     let id = this.ctx.params.id
    //     const student = await this.app.model.Danxuan.findOne({
    //         where: {
    //             id: id
    //         }
    //     })
    //     const studentList = await this.app.model.Students.findAll({
    //         include: [{  //联查试题数据
    //             model: this.app.model.Clazz,
    //             as: 'clazz'
    //         }]
    //     });
    //     student.destroy()
    //     return studentList
    // }
     // 联查学生信息
     async () {
        const studentList = await this.app.model.Students.findAll({
            include:[{  //联查班级的数据
                model:this.app.model.Clazz,
                as:'clazz'
            }]
        });
        await this.ctx.render('student_list.html', {
            studentList: studentList
        })
    }
}

module.exports = DanxuanService;