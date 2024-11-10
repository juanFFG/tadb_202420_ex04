const mongoose = require('mongoose');

const ElementoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    simbolo: {
        type: String,
        required: true,
        unique: true,
        maxlength: 5,
    },
    numeroAtomico: {
        type: Number,
        required: true,
        unique: true,
    },
    configuracionElectronica: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Elemento', ElementoSchema);
