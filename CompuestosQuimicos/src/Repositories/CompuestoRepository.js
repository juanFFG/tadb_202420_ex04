const Compuesto = require('../Models/Compuesto');

class CompuestoRepository {
    // Obtener todos los compuestos
    async obtenerTodos() {
        return await Compuesto.find().populate('elementos.elementoId');
    }

    // Obtener un compuesto por su ID
    async obtenerPorId(id) {
        return await Compuesto.findById(id).populate('elementos.elementoId');
    }

    // Crear un nuevo compuesto
    async crearCompuesto(datos) {
        const nuevoCompuesto = new Compuesto(datos);
        return await nuevoCompuesto.save();
    }

    // Actualizar un compuesto por su ID
    async actualizarCompuesto(id, datos) {
        return await Compuesto.findByIdAndUpdate(id, datos, { new: true }).populate('elementos.elementoId');
    }

    // Eliminar un compuesto por su ID
    async eliminarCompuesto(id) {
        return await Compuesto.findByIdAndDelete(id);
    }

    // Buscar un compuesto por ID de elemento
    async obtenerCompuestosPorElementoId(elementoId) {
        return await Compuesto.find({ 'elementos.elementoId': elementoId });
    }
}

module.exports = new CompuestoRepository();
