var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tech4Africa');
var db = mongoose.connection;

var MovieSchema = mongoose.Schema({
    title: String,
    poster: String,
    overview: String,
    trailer: String,
    year: String
});
var movieModel = mongoose.model('Movie', MovieSchema);

exports.saveMovie = function(movie){
	var newMovie = new movieModel(movie);	
	newMovie.save(function(err, movie){
		if(err) console.log(err);
	});
};

exports.findAllMovies = function(callback){
	movieModel.find({},function(err,moviesFromDB){
		callback(moviesFromDB);
    });
};


