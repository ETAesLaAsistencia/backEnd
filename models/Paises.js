const { Schema, model } = require('mongoose');

const opts = {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
};

const paisesSchema = new Schema(
    {
        isoPais: {
            type: Number,
            required: true
        },
        codigoTelefonico: {
            type: Number,
            required: true
        },
        abreviacionPais: {
            type: String,
            required: true
        },
        nombrePais: {
            type: String,
            required: true
        },
        activo: {
            type: Boolean,
            required: true
        },
        situaciones: {
            type: Array,
            required: false
        },
        idiomas: {
            type: Array,
            required: false
        },
        bloqueado: {
            type: Boolean,
            required: true
        }
    },
    opts
);

module.exports = model('Paises', paisesSchema);