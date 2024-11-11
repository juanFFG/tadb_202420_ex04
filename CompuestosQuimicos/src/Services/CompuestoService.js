const CompuestoRepository = require('../Repositories/CompuestoRepository');
const ElementoRepository = require('../Repositories/ElementoRepository');

class CompuestoService {
    // Obtener todos los compuestos
    async obtenerTodosLosCompuestos() {
        try {

            return await CompuestoRepository.obtenerTodos();

        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener los compuestos: ' + error.message);
        }
    }

    // Obtener un compuesto por su ID
    async obtenerCompuestoPorId(id) {
        try {

            // Validar si el ID no es nulo
            if (id == null) {
                throw new Error('El ID es requerido');
            }

            const compuesto = await CompuestoRepository.obtenerPorId(id);

            // Validar si el compuesto existe
            if (!compuesto) {
                throw new Error('Compuesto no encontrado');
            }

            return compuesto;

        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener el compuesto: ' + error.message);
        }
    }

    // Crear un nuevo compuesto con validación
    async crearCompuesto(datos) {
        try {

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

        } catch (error) {
            console.log(error);
            throw new Error('Error al crear el compuesto: ' + error.message);
        }
    }

    // Actualizar un compuesto por su ID
    async actualizarCompuesto(id, datos) {
        try {

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

            // Actualizar el compuesto
            return await CompuestoRepository.actualizarCompuesto(id, datos);

        } catch (error) {
            console.log(error);
            throw new Error('Error al actualizar el compuesto: ' + error.message);
        }
    }

    // Eliminar un compuesto por su ID
    async eliminarCompuesto(id) {
        try {

            // Validar que el ID no sea nulo
            if (id == null) {
                throw new Error('El ID es requerido');
            }

            // Eliminar el compuesto
            const compuestoEliminado = await CompuestoRepository.eliminarCompuesto(id);
            if (!compuestoEliminado) {
                throw new Error('Compuesto no encontrado');
            }
            return compuestoEliminado;
        } catch (error) {
            console.log(error);
            throw new Error('Error al eliminar el compuesto: ' + error.message);
        }
    }
}

module.exports = new CompuestoService();
