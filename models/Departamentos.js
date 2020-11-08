const { Schema, model } = require('mongoose');

const departamentosSchema = new Schema(
    {
        isoPais: {
            type: Number,
            required: true
        },
        nombrePais: {
            type: String,
            required: true
        },
        departamentos: [
            new Schema({
                id: {
                    type: Number,
                    required: true
                },
                nombre: {
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
                bloqueado: {
                    type: Boolean,
                    required: true
                },
                created_at: {
                    type:Date, default:Date.now,
                    required: true
                },
                update_at: {
                    type: Date,
                    required: false
                }
            })
        ]
    }
);

module.exports = model('Departamentos', departamentosSchema);