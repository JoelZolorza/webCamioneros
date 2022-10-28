const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/listaCamionero.html'));
})

// Crear cliente --> /clients/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/crearCamionero.html'));
})

// Editar cliente --> /clients/update/:id
router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/camionero/editarCamionero.html'));
})

module.exports = router;