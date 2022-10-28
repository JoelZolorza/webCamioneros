const router = require('express').Router();
const camioneroRouter = require('./Camionero.routes');
const paqueteRouter = require('./Paquete.routes');

router.use('/camionero', camioneroRouter);
router.use('/paquete', paqueteRouter);

module.exports = router;