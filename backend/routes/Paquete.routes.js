const router = require('express').Router()
const { Producto, Paquete } = require('../database/models')

router.get("/:id", (req, res) => {
    Paquete.findByPk(req.params.id).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Paquete.findAll({}).then(list => {
        res.json(list)
    })
})

router.post("/create", (req, res) => {
    Paquete.create({
        codigoPaquete: req.body.codigoPaquete,
        descripcion: req.body.descripcion,
        destinatario: req.body.destinatario,
        direccionDestinatario: req.body.direccionDestinatario
    }).then(paquete => {
        res.json(paquete)
    })
})

router.put('/update/:id', (req, res) => {
    Paquete.update({
        codigoPaquete: req.body.codigoPaquete,
        descripcion: req.body.descripcion,
        destinatario: req.body.destinatario,
        direccionDestinatario: req.body.direccionDestinatario
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
    Paquete.destroy({
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