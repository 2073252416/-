module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Gfz = app.model.define('gfz', { //sequelize会自动创建主键
        title: STRING,
        answer: STRING,
        difficulty:STRING
    });

    Gfz.associate = function(){
        app.model.Gfz.belongsTo(app.model.Random,{
            foreignKey:'random_id',
            targetKey:'id',
        })
    }

    
    return Gfz
    ;
}