const router = require('express').Router();
const path = require('path');

const camionerosRouter = require('./camioneros.routes');
const camionesRouter = require('./camiones.routes');
const provinciasRouter = require('./provincias.routes');
const paquetesRouter = require('./paquetes.routes');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})

router.use('/camioneros', camionerosRouter);
router.use('/paquetes', paquetesRouter);
router.use('/provincias', provinciasRouter);
router.use('/camiones', camionesRouter);

module.exports = router;