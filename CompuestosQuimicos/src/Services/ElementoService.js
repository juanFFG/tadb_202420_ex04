const ElementoRepository = require('../Repositories/ElementoRepository');

class ElementoService {
    // Obtener todos los elementos
    async obtenerTodosLosElementos() {
        return await ElementoRepository.obtenerTodos();
    }

    // Obtener un elemento por su ID
    async obtenerElementoPorId(id) {
        const elemento = await ElementoRepository.obtenerPorId(id);
        if (!elemento) {
            throw new Error('Elemento no encontrado');
        }
        return elemento;
    }

    // Crear un nuevo elemento con validación
    async crearElemento(datos) {
        // Validaciones básicas
        if (!datos.nombre || !datos.simbolo || !datos.numeroAtomico || !datos.configuracionElectronica) {
            throw new Error('Todos los campos son obligatorios');
        }
        
        // Crear el elemento usando el repositorio
        return await ElementoRepository.crearElemento(datos);
    }

    // Actualizar un elemento por su ID
    async actualizarElemento(id, datos) {
        const elementoActualizado = await ElementoRepository.actualizarElemento(id, datos);
        if (!elementoActualizado) {
            throw new Error('Elemento no encontrado');
        }
        return elementoActualizado;
    }

    // Eliminar un elemento por su ID
    async eliminarElemento(id) {
        const elementoEliminado = await ElementoRepository.eliminarElemento(id);
        if (!elementoEliminado) {
            throw new Error('Elemento no encontrado');
        }
        return elementoEliminado;
    }
}

module.exports = new ElementoService();
