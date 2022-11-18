const {Model, DataTypes} = require("sequelize");
const sequelize = require("../sequelize");

class Envio extends Model {};

Envio.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'envio',
    tableName: 'envios'
})
module.exports = Envio;