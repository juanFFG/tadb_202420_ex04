const CompuestoRepository = require('../Repositories/CompuestoRepository');
const ElementoRepository = require('../Repositories/ElementoRepository');

class CompuestoService {
    // Obtener todos los compuestos
    async obtenerTodosLosCompuestos() {
        return await CompuestoRepository.obtenerTodos();
    }

    // Obtener un compuesto por su ID
    async obtenerCompuestoPorId(id) {
        const compuesto = await CompuestoRepository.obtenerPorId(id);
        if (!compuesto) {
            throw new Error('Compuesto no encontrado');
        }
        return compuesto;
    }

    // Crear un nuevo compuesto con validación
    async crearCompuesto(datos) {
        // Validación general
        if (!datos.nombre || !datos.formulaQuimica || !datos.masaMolar || !datos.estadoAgregacion || !datos.elementos) {
            throw new Error('Todos los campos son obligatorios');
        }

        // Validar que cada elemento existe
        for (const elemento of datos.elementos) {
            const existeElemento = await ElementoRepository.obtenerPorId(elemento.elementoId);
            if (!existeElemento) {
                throw new Error(`Elemento con ID ${elemento.elementoId} no encontrado`);
            }
        }

        // Crear el compuesto
        return await CompuestoRepository.crearCompuesto(datos);
    }

    // Actualizar un compuesto por su ID
    async actualizarCompuesto(id, datos) {
        // Validar que el compuesto existe
        const compuestoExistente = await CompuestoRepository.obtenerPorId(id);
        if (!compuestoExistente) {
            throw new Error('Compuesto no encontrado');
        }

        // Validar los elementos asociados, si se proporcionan
        if (datos.elementos) {
            for (const elemento of datos.elementos) {
                const existeElemento = await ElementoRepository.obtenerPorId(elemento.elementoId);
                if (!existeElemento) {
                    throw new Error(`Elemento con ID ${elemento.elementoId} no encontrado`);
                }
            }
        }

        // Actualizar el compuesto usando el repositorio
        return await CompuestoRepository.actualizarCompuesto(id, datos);
    }

    // Eliminar un compuesto por su ID
    async eliminarCompuesto(id) {
        const compuestoEliminado = await CompuestoRepository.eliminarCompuesto(id);
        if (!compuestoEliminado) {
            throw new Error('Compuesto no encontrado');
        }
        return compuestoEliminado;
    }
}

module.exports = new CompuestoService();
