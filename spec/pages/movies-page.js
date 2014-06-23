var MoviesPage = function(){
	this.movies = element(by.repeater('movie in movies'));

	this.get = function(){
		browser.get('http://localhost:3000/movies')
	};
};

module.exports = new MoviesPage