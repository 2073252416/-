module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Random  = app.model.define('Random',{
        
    });

    return Random;
}