const express = require('express')
const cors = require('cors')
const app = express()
const { Camionero, Paquete } = require('./database/models')
const sequelize = require("./database/sequelize")
const router = require('./routes')
const port = 5000



app.use (express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/', router)


app.listen(port, () => {
  console.log(`Backend listo en el puerto ${port}`)

  sequelize.sync({ alter: false }).then(() => {
      //console.log('Sincronizado')
  })
})

















/*
app.get('/', (req, res) => {
  res.send(`Hello World!!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/