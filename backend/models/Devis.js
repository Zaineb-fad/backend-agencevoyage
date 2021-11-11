const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let devisSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  telehpone: {
    type: Number
  },
  ville: {
    type: String
  },
 
  date: {
    type: String 
  },
 
  destination: {
    type: String
  },
  notes: {
    type: String
  }
}, {
    collection: 'devis'
  })

module.exports = mongoose.model('Devis', devisSchema)