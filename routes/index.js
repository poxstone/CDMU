var express = require('express');
var router = express.Router();
var gb = {
	//rdir : 'http://www.bibliotecanacional.gov.co/',
	rdir :'',
	titles : ['Músicas Tradicionales','Festivales de Música','Expresiones sonoras y musicales Comunidades Indigenas','Investigación y Documentación','Bandas','Tesauro','Expresiones Vocales','A manera de introducción','Cartografía de Prácticas musicales en Colombia'],
	links : ["cartografias_tradicionales", "cartografias_festivales", "cartografias_indigenas", "cartografias_redes", "cartografias_bandas", "cartografias_tesauro", 'cartografias_vocales', 'cartografias',"cartograf%C3%AD-de-pr%C3%A1cticas-musicales-en-colombia"]
};
gb.home= 'cartograf%C3%AD-de-pr%C3%A1cticas-musicales-en-colombia';

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[0], function(req, res, next ) {
	res.render( gb.links[0], { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[1], function(req, res, next ) {
	res.render( gb.links[1], { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[2], function(req, res, next ) {
	res.render( gb.links[2], { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[3], function(req, res, next ) {
	res.render( gb.links[3], { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[4], function(req, res, next ) {
	res.render( gb.links[4], { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[5], function(req, res, next ) {
	res.render( gb.links[5], { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[6], function(req, res, next ) {
	res.render( gb.links[6], { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[7], function(req, res, next ) {
	res.render( gb.links[7], { qr : req.query, gb : gb } );
});

router.get( '/'+gb.links[8], function(req, res, next ) {
	res.render( 'index', { qr : req.query, gb : gb } );
});

router.get('/total', function(req, res, next) {
	res.render('total', { qr : req.query, gb : gb } );
});

module.exports = router;
