module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Danxua = app.model.define('danxuas', { //sequelize会自动创建主键
        Choice_question:STRING,
        A:STRING,
        B:STRING,
        C:STRING,
        D:STRING,
        three:STRING,
        four:STRING,
        Fraction:STRING,
        Question:STRING
    });
    return Danxua;
}