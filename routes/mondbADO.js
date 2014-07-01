var saveToDB = require('./movieModel');

exports.saveMovie = function(req, resp){
	saveToDB.saveMovie(req.body);
};


exports.findAllMovies = function(req, res){
	var moviesArray;
	saveToDB.findAllMovies(function(movies){
		res.send(movies);
	});

};