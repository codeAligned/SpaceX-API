
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

const shipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  roles: [
    String,
  ],
  active: {
    type: Boolean,
    required: true,
  },
  imo: {
    type: Number,
    default: null,
  },
  mmsi: {
    type: Number,
    default: null,
  },
  abs: {
    type: Number,
    default: null,
  },
  class: {
    type: Number,
    default: null,
  },
  mass_kg: {
    type: Number,
    default: null,
  },
  mass_lbs: {
    type: Number,
    default: null,
  },
  year_built: {
    type: Number,
    default: null,
  },
  home_port: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    default: null,
  },
  speed_kn: {
    type: Number,
    default: null,
  },
  course_deg: {
    type: Number,
    default: null,
  },
  latitude: {
    type: Number,
    default: null,
  },
  longitude: {
    type: Number,
    default: null,
  },
  link: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
});

shipSchema.plugin(mongoosePaginate);
shipSchema.plugin(idPlugin);

const Ship = mongoose.model('Ship', shipSchema);

module.exports = Ship;