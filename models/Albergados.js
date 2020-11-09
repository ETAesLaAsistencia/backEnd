const { Schema, model } = require("mongoose");

const AlbergadoSchema = new Schema({
  albergue: {
    type: Schema.ObjectId,
    ref: "Albergues",
    required: true,
  },
  fechaRegistro: {
    type: Date,
    required: true,
  },
  primerNombre: { type: String, required: true },
  segundoNombre: { type: String, required: false },
  primerApellido: { type: String, required: true },
  segundoApellido: { type: String, required: false },
  fechaNacimiento: { type: Date, required: true },
  ciudadNacimiento: { type: String, required: true },
  telefono: { type: String, required: false },
  numIdentidad: { type: String, required: true, maxlength: 13 },
  estaAlbergado: { type: Boolean, required: true, default: true },
  padecimientos: { type: [String], required: false },
  etapa: {
    type: String,
    required: true,
    enum: ["bebe", "niño", "adolescente", "adulto", "anciano"],
  },
});

module.exports = model("Albergados", AlbergadoSchema);
