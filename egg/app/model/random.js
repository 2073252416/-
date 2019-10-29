module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Random = app.model.define('random', { //sequelize会自动创建主键
        // 卷名
        name: STRING,
        // 单选题表
        Choice_question:STRING,
        A:STRING,
        B:STRING,
        C:STRING,
        D:STRING,
        three:STRING,
        four:STRING,
        // 多选题表
        title: STRING,
        one:STRING,
        two:STRING,
        three:STRING,
        four:STRING,
        a:STRING,
        b:STRING,
        c:STRING,
        d:STRING,
        // 多选题难度
        difficulty:STRING,
        // 填空题表,简答题表 
        title: STRING,
        answer: STRING,
        difficulty:STRING,
    });
    Random.associate = function() {
        app.model.Random.belongsTo(app.model.Paper, {
            foreignKey: 'paper_id', 
            targetKey: 'id',
        });
    }
    return Random;    
}
    