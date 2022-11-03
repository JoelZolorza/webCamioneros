const {Model, DataTypes} = require("sequelize");
const sequelize = require("../sequelize");

class Provincia extends Model {};

Provincia.init({
    codigoProvincia: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nombre: DataTypes.STRING,

    ciudad: DataTypes.STRING,

    barrio: DataTypes.STRING,

   

    
}, {
    sequelize,
    modelName: 'provincia',
    tableName: 'provincias'
})
module.exports = Provincia;