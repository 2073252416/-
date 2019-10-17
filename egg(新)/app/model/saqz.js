module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Saqz = app.model.define('saqz', { //sequelize会自动创建主键
        title: STRING,
        answer: STRING,
        difficulty:STRING
    })
    
    return Saqz
    ;
}