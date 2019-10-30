module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Gfz = app.model.define('gfz', { //sequelize会自动创建主键
        title: STRING,
        answer: STRING,
        difficulty:STRING
    });
    return Gfz
    ;
}