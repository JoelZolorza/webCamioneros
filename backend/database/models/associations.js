const { BelongsToMany } = require("sequelize");
const { Provincia, Paquete, Envio  } = require("./models");

Provincia.hasMany(Envio, {foreignkey: 'provinciaId'})
Envio.belongsToMany(Provincia, {foreignkey: 'paqueteId'})

Paquete.belongsToMany(Envio, {foreignkey: 'paqueteId'})
Envio.belongsToMany(Provincia, {foreignkey: 'paqueteId'})

