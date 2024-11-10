const express = require('express');
const ElementoController = require('../Controllers/ElementoController');
const router = express.Router();

router.get('/', ElementoController.obtenerTodosLosElementos);
router.get('/:id', ElementoController.obtenerElementoPorId);
router.post('/', ElementoController.crearElemento);
router.put('/:id', ElementoController.actualizarElemento);
router.delete('/:id', ElementoController.eliminarElemento);

module.exports = router;
