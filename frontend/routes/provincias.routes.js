const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/provincia/listaProvincias.html'));
})

// Crear cliente --> /clients/csreate
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/provincia/crearProvincia.html'));
})

// Editar cliente --> /clients/uPdate/:id
router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/provincia/editarProvincia.html'));
})

module.exports = router;