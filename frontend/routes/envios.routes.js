const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/envio/listaEnvios.html'));
})

// Crear cliente --> /clients/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/envios/crearEnvio.html'));
})

// Editar cliente --> /clients/update/:id
router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/envios/editarEnvios.html'));
})

module.exports = router;