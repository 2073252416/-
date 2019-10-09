module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Saqz = app.model.define('saqz', { //sequelize会自动创建主键
        title: STRING,
        answer: STRING,
        difficulty:STRING
    });

    Saqz.associate = function(){
        app.model.Saqz.belongsTo(app.model.Random,{
            foreignKey:'random_id',
            targetKey:'id',
        })
    }
    
    return Saqz
    ;
}