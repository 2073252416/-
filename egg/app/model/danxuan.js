module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Danxuan = app.model.define('danxauns', { //sequelize会自动创建主键
        Choice_question:STRING,
        A:STRING,
        B:STRING,
        C:STRING,
        D:STRING,
        three:STRING,
        four:STRING,
    })
    Danxuan.associate = function () {
        app.model.Danxuan.belongsTo(app.model.gfz, {  //设置外键
            foreignKey: 'clazz_id',//关联的外键
            as: 'clazz'//将关联的数据显示到该字段上
        })
    }
    return Danxuan;
}