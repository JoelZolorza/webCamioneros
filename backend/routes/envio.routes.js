const router = require('express').Router()
const { Envio } = require('../database/models')

router.get("/:id", (req, res) => {
    Envio.findByPk(req.params.id).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Envio.findAll({}).then(list => {
        res.json(list)
    })
})

router.post("/create", (req, res) => {
    Envio.create({
        codigoEnvio: req.body.codigoEnvio,
       
    }).then(envio => {
        res.json(envio)
    })
})

router.put('/update/:id', (req, res) => {
    Envio.update({
        codigoEnvio: req.body.codigoEnvio,
        
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
    Envio.destroy({
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