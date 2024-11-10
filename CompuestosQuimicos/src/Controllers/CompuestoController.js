const CompuestoService = require('../Services/CompuestoService');

class CompuestoController {
    // Obtener todos los compuestos
    async obtenerTodosLosCompuestos(req, res) {
        try {
            const compuestos = await CompuestoService.obtenerTodosLosCompuestos();
            res.status(200).json(compuestos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Obtener un compuesto por ID
    async obtenerCompuestoPorId(req, res) {
        try {
            const compuesto = await CompuestoService.obtenerCompuestoPorId(req.params.id);
            res.status(200).json(compuesto);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // Crear un nuevo compuesto
    async crearCompuesto(req, res) {
        try {
            const nuevoCompuesto = await CompuestoService.crearCompuesto(req.body);
            res.status(201).json(nuevoCompuesto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Actualizar un compuesto por ID
    async actualizarCompuesto(req, res) {
        try {
            const compuestoActualizado = await CompuestoService.actualizarCompuesto(req.params.id, req.body);
            res.status(200).json(compuestoActualizado);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // Eliminar un compuesto por ID
    async eliminarCompuesto(req, res) {
        try {
            await CompuestoService.eliminarCompuesto(req.params.id);
            res.status(200).json({ message: 'Compuesto eliminado correctamente' });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new CompuestoController();
