var express = require('express');
var router = express.Router();
var mapController = require('../controllers/map');

/* GET users listing. */
router.post('/', mapController.postMaps );
router.get('/', mapController.getMaps );
router.get('/:beer_id', mapController.getMap );
router.put('/:beer_id', mapController.putMap );
router.delete('/:beer_id', mapController.deleteMap );

module.exports = router;