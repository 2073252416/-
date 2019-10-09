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
    });

    Danxua.associate = function(){
        app.model.Danxuan.belongsTo(app.model.Random,{
            foreignKey:'random_id',
            targetKey: 'id',
        })
    }
    
    return Danxua;




    
    // Danxua.associate = function(){
    //     app.model.Danxuan.hasMany(app.model.Random,{
    //         foreignKey:'danxua_id',
    //         targetKey: 'id',
    //     })
    // }

   
}