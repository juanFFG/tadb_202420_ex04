const mongoose = require('mongoose');

const CompuestoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    formulaQuimica: {
        type: String,
        required: true,
        unique: true,
    },
    masaMolar: {
        type: Number,
        required: true,
    },
    estadoAgregacion: {
        type: String,
        required: true,
        enum: ['Sólido', 'Líquido', 'Gas'],
    },
    elementos: [
        {
            elementoId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Elemento',
                required: true,
            },
            cantidadAtomos: {
                type: Number,
                required: true,
                min: 1,
            },
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model('Compuesto', CompuestoSchema);
