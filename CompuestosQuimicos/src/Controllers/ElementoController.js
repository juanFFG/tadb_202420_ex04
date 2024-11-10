const ElementoService = require('../Services/ElementoService');

class ElementoController {
    // Obtener todos los elementos
    async obtenerTodosLosElementos(req, res) {
        try {
            const elementos = await ElementoService.obtenerTodosLosElementos();
            res.status(200).json(elementos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Obtener un elemento por ID
    async obtenerElementoPorId(req, res) {
        try {
            const elemento = await ElementoService.obtenerElementoPorId(req.params.id);
            res.status(200).json(elemento);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // Crear un nuevo elemento
    async crearElemento(req, res) {
        try {
            const nuevoElemento = await ElementoService.crearElemento(req.body);
            res.status(201).json(nuevoElemento);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Actualizar un elemento por ID
    async actualizarElemento(req, res) {
        try {
            const elementoActualizado = await ElementoService.actualizarElemento(req.params.id, req.body);
            res.status(200).json(elementoActualizado);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // Eliminar un elemento por ID
    async eliminarElemento(req, res) {
        try {
            await ElementoService.eliminarElemento(req.params.id);
            res.status(200).json({ message: 'Elemento eliminado correctamente' });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new ElementoController();
