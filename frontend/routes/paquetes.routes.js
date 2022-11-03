const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/listaPaquetes.html'));
})

// Crear cliente --> /clients/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/crearPaquete.html'));
})

// Editar cliente --> /clients/update/:id
router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/paquete/editarPaquete.html'));
})

module.exports = router;