const CompuestoRepository = require('../Repositories/CompuestoRepository');
const ElementoRepository = require('../Repositories/ElementoRepository');

class ElementoService {
    // Obtener todos los elementos
    async obtenerTodosLosElementos() {
        try {

            return await ElementoRepository.obtenerTodos();

        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener los elementos');
        }
    }

    // Obtener un elemento por su ID
    async obtenerElementoPorId(id) {
        try {

            //validadr si el id no es null
            if (id == null) {
                throw new Error('El ID es requerido');
            }
            const elemento = await ElementoRepository.obtenerPorId(id);
            
            // Validar si el elemento existe
            if (!elemento) {
                throw new Error('Elemento no encontrado');
            }

            return elemento;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener el elemento: ' + error.message);
        }

    }

    // Crear un nuevo elemento con validación
    async crearElemento(datos) {
        try{

        // Validaciones básicas
        if (!datos.nombre || !datos.simbolo || !datos.numeroAtomico || !datos.configuracionElectronica) {
            throw new Error('Todos los campos son obligatorios');
        }

        // Crear el elemento usando el repositorio
        return await ElementoRepository.crearElemento(datos);

        }catch (error) {
            console.log(error);
            throw new Error('Error al crear el elemento: ' + error.message);
        }
    }

    // Actualizar un elemento por su ID
    async actualizarElemento(id, datos) {
        try {

            // Validar si el id no es null
            if (id == null) {
                throw new Error('El ID es requerido');
            }

            // Validar que el elemento existe
            const elementoExistente = await ElementoRepository.obtenerPorId(id);
            if (!elementoExistente) {
                throw new Error('Elemento no encontrado');
            }

            // Actualizar el elemento usando el repositorio
            return await ElementoRepository.actualizarElemento(id, datos);

        } catch (error) {
            console.log(error);
            throw new Error('Error al actualizar el elemento: ' + error.message);
        }
    }

    // Eliminar un elemento por su ID
    async eliminarElemento(id) {
        try {

            // Validar si el id no es null
            if (id == null) {
                throw new Error('El ID es requerido');
            }

            // Validar que el elemento no tenga compuestos asociados
            const compuestos = await CompuestoRepository.obtenerCompuestosPorElementoId(id);

            if (compuestos.length > 0) {
                throw new Error('No se puede eliminar el elemento porque tiene compuestos asociados');
            }

            // Eliminar el elemento usando el repositorio
            return await ElementoRepository.eliminarElemento(id);

        } catch (error) {
            console.log(error);
            throw new Error('Error al eliminar el elemento: ' + error.message);
        }
    }
}

module.exports = new ElementoService();
