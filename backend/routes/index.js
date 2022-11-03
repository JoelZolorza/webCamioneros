const router = require('express').Router();
const camioneroRouter = require('./Camionero.routes');
const paqueteRouter = require('./Paquete.routes');
const camionRouter = require('./Camion.routes');
const provinciaRouter = require('./Provincia.routes');

router.use('/camionero', camioneroRouter);
router.use('/paquete', paqueteRouter);
router.use('/camion', camionRouter);
router.use('/provincia', provinciaRouter);


module.exports = router;