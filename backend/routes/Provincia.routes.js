const router = require('express').Router()
const { Provincia } = require('../database/models')

router.get("/:id", (req, res) => {
    Provincia.findByPk(req.params.id).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Provincia.findAll({}).then(list => {
        res.json(list)
    })
})

router.post("/create", (req, res) => {
    Provincia.create({
        codigoProvincia: req.body.codigoProvincia,
        nombre: req.body.nombre,
        ciudad: req.body.ciudad,
        barrio: req.body.barrio
    }).then(provincia => {
        res.json(provincia)
    })
})

router.put('/update/:id', (req, res) => {
    Provincia.update({
        codigoProvincia: req.body.codigoProvincia,
        nombre: req.body.nombre,
        ciudad: req.body.ciudad,
        barrio: req.body.barrio
    }, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.delete('/delete/:id', (req, res) => {
    Provincia.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

module.exports = router