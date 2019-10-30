module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Paper = app.model.define('paper', { //sequelize会自动创建主键
        name: STRING,
    })

    Paper.associate = function() {
        app.model.Paper.hasMany(app.model.Random, {
            foreignKey: 'paper_id', 
            targetKey: 'id',
            as: 'papers'
        });
    //     app.model.Paper.belongsTo(app.model.Random, {
    //         foreignKey: 'random_id',
    //         as: 'random'
    //     });
    }

    return Paper;
}