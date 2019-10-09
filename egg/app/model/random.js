module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Random = app.model.define('random', { //sequelize会自动创建主键
        name: STRING,
        danxuan:STRING,
        duoxuan:STRING,
        jianda:STRING,
        ainkong:STRING,

    })
    
    Random.associate = function() {
        app.model.Random.hasMany(app.model.Danxuan,{
            foreignKey:'random_id',
            targetKey: 'id',
            as:'danxua'
        });
        app.model.Random.hasMany(app.model.Ms,{
            foreignKey:'random_id',
            targetKey: 'id',
            as:'ms'
        });
        app.model.Random.hasMany(app.model.Gfz,{
            foreignKey:'random_id',
            targetKey: 'id',
            as:'gfz'            
        });
        app.model.Random.hasMany(app.model.Saqz,{
            foreignKey:'random_id',
            targetKey: 'id',
            as:'saqz'          
        })
    }
    return Random;

    // Random.associate = function() {
    //     app.model.Random.belongsTo(app.model.Danxuan,{
    //         foreignKey:'danxua_id',
    //         targetKey: 'id',
    //         as:'danxua'
    //     })
    // }

    
}