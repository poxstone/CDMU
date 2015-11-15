var express = require('express');
var router = express.Router();

var rdir = 'http://nrno-poxstone.c9.io/imagenes/bnc_cartografia';
var rdir = 'http://www.bibliotecanacional.gov.co/imagenes/bnc_cartografia';
var rdir = '';

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { qr : req.query, rdir : rdir});
	console.log(req.query);
});

module.exports = router;