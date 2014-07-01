var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tech4Arica');
var db = mongoose.connection;

var MovieSchema = mongoose.Schema({
    title: String,
    poster: String,
    overview: String,
    trailer: String,
    year: String
});
var movieSchema = mongoose.model('Movie', MovieSchema);

exports.saveMovie = function(movie){
	var newMovie = new movieSchema(movie);

	db.once('open', function(err, db){
		newMovie.save(function(err, movie){
			if(err) console.log(movie);
		});
	});
};

exports.findAllMovies = function(){
	var movies;
	db.once('open', function(err,db){
		db.movies.find(function(err,moviesFromDB){
			movies = moviesFromDB;
		});
	});
	return movies
};


