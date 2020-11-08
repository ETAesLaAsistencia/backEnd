const { Schema, model } = require('mongoose');

const municipiosSchema = new Schema(
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
                idDepartamento: {
                    type: Number,
                    required: true
                },
                nombre: {
                    type: String,
                    required: true
                },
                municipios: [
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
            })
        ]
    }
);

module.exports = model('Municipios', municipiosSchema);