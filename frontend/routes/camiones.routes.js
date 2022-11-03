const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camion/listaCamiones.html'));
})


router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/camion/crearCamion.html'));
})


router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/camion/editarCamion.html'));
})

module.exports = router;