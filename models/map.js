var mongoose = require('mongoose');

var MapSchema = new mongoose.Schema({
	name: String,
	type: String
});

module.exports = mongoose.model('Map', MapSchema);