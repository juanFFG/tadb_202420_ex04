const express = require('express');
const CompuestoController = require('../Controllers/CompuestoController');
const router = express.Router();

router.get('/', CompuestoController.obtenerTodosLosCompuestos);
router.get('/:id', CompuestoController.obtenerCompuestoPorId);
router.post('/', CompuestoController.crearCompuesto);
router.put('/:id', CompuestoController.actualizarCompuesto);
router.delete('/:id', CompuestoController.eliminarCompuesto);

module.exports = router;
