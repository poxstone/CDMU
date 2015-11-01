var Map = require('../models/map');

//save maps
exports.postMaps = function(req, res){
	var map = new Map();

	map.name = req.body.name || null;
	map.type = req.body.type || null;

	if(map.name && map.type){

		map.save(function(err){
			
			if(err){
				res.send(err)
			}else{
				res.json({message: 'ok', data: map});
			}

		});

	}else{
		res.json({message: 'the inputs are incompete0'});
	}
};

//get maps
exports.getMaps = function(req, res){
	
  Map.find(function(err, maps) {
    if (err)
      res.send(err);

    res.json(maps);
  });
};


//expecific map
exports.getMap = function(req, res){
	Map.findById(req.params.map_id, function(err, map){

		if(err){
			res.send(err);
		}else{
			res.json(map);
		}

	});
};

//modify
exports.putMap = function(req, res){
	Map.findById(req.params.map_id, function(err, map){

		if(err){
			res.send(err);
		}else{
			map.name = req.body.name || null;
			map.type = req.body.type || null;

			if(map.name && map.type){
				map.save(function(err){
					if(err){
						res.send(err);

					}else{
						res.json(map);
					}
				});
			}else{
				res.json({message:'complete inputs'});
			}

		}

	});
};

exports.deleteMap = function(req, res){

	Map.findById(req.params.map_id, function(err){
		if(err){
			res.send(err);
		}else{
			Map.findByIdandRemove(req.params.map_id, function(err){
				if(err){
					res.send(err);
				}else{
					res.json({message:'delete map'})
				}
			});
		}

	});
}