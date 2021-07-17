const { Schema, model } = require('mongoose')

const Scooter = new Schema({
    scooterId:  Number, 
    location: {
        latitude: Number,
        longitude: Number,
    },
    charge: Number,
    active: Boolean,
    breakdown: Boolean
  });

  module.exports = model('scooters', Scooter)