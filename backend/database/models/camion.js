const {Model, DataTypes} = require("sequelize");
const sequelize = require("../sequelize");

class Camion extends Model {};

Camion.init({
  matriculaCamion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
  
    descripcion: DataTypes.STRING,

    conductor: DataTypes.STRING
  
    
}, {
    sequelize,
    modelName: 'camion',
    tableName: 'camiones'
})
module.exports = Camion;