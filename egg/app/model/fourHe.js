module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const FourHe = app.model.define('FourHe', { //sequelize会自动创建主键
        name: STRING,
    });
    FourHe.associate = function() {
        app.model.FourHe.hasMany(app.model.Danxuan,{
            foreignKey:'FourHe_id',
            targetKey: 'id',
            as:'danxua'
        });
        app.model.FourHe.hasMany(app.model.Ms,{
            foreignKey:'FourHe_id',
            targetKey: 'id',
            as:'ms'
        });
        app.model.FourHe.hasMany(app.model.Gfz,{
            foreignKey:'FourHe_id',
            targetKey: 'id',
            as:'gfz'            
        });
        app.model.FourHe.hasMany(app.model.Saqz,{
            foreignKey:'FourHe_id',
            targetKey: 'id',
            as:'saqz'          
        })
    }
    return FourHe
    ;
}