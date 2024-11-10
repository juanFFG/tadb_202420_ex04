const Elemento = require('../Models/Elemento');

class ElementoRepository {
    // Obtener todos los elementos
    async obtenerTodos() {
        return await Elemento.find();
    }

    // Obtener un elemento por su ID
    async obtenerPorId(id) {
        return await Elemento.findById(id);
    }

    // Crear un nuevo elemento
    async crearElemento(datos) {
        const nuevoElemento = new Elemento(datos);
        return await nuevoElemento.save();
    }

    // Actualizar un elemento por su ID
    async actualizarElemento(id, datos) {
        return await Elemento.findByIdAndUpdate(id, datos, { new: true });
    }

    // Eliminar un elemento por su ID
    async eliminarElemento(id) {
        return await Elemento.findByIdAndDelete(id);
    }
}

module.exports = new ElementoRepository();
