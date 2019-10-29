module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Shor = app.model.define('shorz', { //sequelize会自动创建主键
        title: STRING,
        answer: STRING,
        difficulty:STRING
    })
    
    return Shor
    ;
}