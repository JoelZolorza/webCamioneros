const router = require('express').Router()
const { Camion } = require('../database/models')


router.get("/:id", (req, res) => {
    Camion.findByPk(req.params.id).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Camion.findAll({}).then(list => {
        res.json(list)
    })
})

router.post("/create", (req, res) => {
    Camion.create({
        matriculaCamion: req.body.matriculaCamion,
        descripcion: req.body.descripcion,
        conductor: req.body.conductor
       
    }).then(camion => {
        res.json(camion)
    })
})

router.put('/update/:id', (req, res) => {
    Camion.update({
        matriculaCamion: req.body.matriculaCamion,
        descripcion: req.body.descripcion,
        conductor: req.body.conductor
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
    Camion.destroy({
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