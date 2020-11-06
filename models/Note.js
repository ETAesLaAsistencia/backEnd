const { Schema, model } = require('mongoose');

const boatSchema = new Schema(
  {
    encargado: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    ciudad:{
      type: String,
      require:true
    },
    NumeroTelefono:{
      type:String,
      require:true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Boat', boatSchema);
