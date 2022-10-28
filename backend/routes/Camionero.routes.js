const router = require('express').Router()
const { Camionero } = require('../database/models')

router.get("/:id", (req, res) => {
    Camionero.findByPk(req.params.id).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Camionero.findAll({}).then(list => {
        res.json(list)
    })
})

router.post("/create", (req, res) => {
    Camionero.create({
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        salario: req.body.salario,
        poblacion: req.body.poblacion,
        telefono: req.body.telefono
    }).then(camionero => {
        res.json(camionero)
    })
})

router.put('/update/:id', (req, res) => {
    Camionero.update({
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        salario: req.body.salario,
        poblacion: req.body.poblacion,
        telefono: req.body.telefono
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
    Camionero.destroy({
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