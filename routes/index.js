var express = require('express');
var router = express.Router();
var gb = {
	//rdir : 'http://nrno-poxstone.c9.io/imagenes/bnc_cartografia',
	//rdir : 'http://www.bibliotecanacional.gov.co/imagenes/bnc_cartografia',
	rdir :'',
	titles : ['Músicas Tradicionales','Festivales de Música','Expresiones sonoras y musicales Comunidades Indigenas','Investigación y Documentación','Bandas','Tesauro','Expresiones Vocales','A manera de introducción','Cartografía de Prácticas musicales en Colombia'],
	links : ["cartografias_tradicionales", "cartografias_festivales", "cartografias_indigenas", "cartografias_redes", "cartografias_bandas", "cartografias_tesauro", 'vocales', 'introcuccion',"cartografias"]
};


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { qr : req.query, gb : gb } );
});

router.get('/cartografias', function(req, res, next) {
	res.render('index', { qr : req.query, gb : gb } );
});

router.get('/cartografias_tradicionales', function(req, res, next) {
	res.render('cartografias_tradicionales', { qr : req.query, gb : gb } );
});

router.get('/total', function(req, res, next) {
	res.render('total', { qr : req.query, gb : gb } );
});

module.exports = router;
