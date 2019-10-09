module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Ms = app.model.define('ms', { //sequelize会自动创建主键
        title: STRING,
        one:STRING,
        two:STRING,
        three:STRING,
        four:STRING,
        a:STRING,
        b:STRING,
        c:STRING,
        d:STRING,
        // 难度
        difficulty:STRING
    });

    Ms.associate = function(){
        app.model.Ms.belongsTo(app.model.Random,{
            foreignKey:'random_id',
            targetKey:'id',
        })
    }

    return Ms;
}