(function(module){

	var data = [{
					name: 'Biscuit',
					price: 2.95,
					description: 'A nice biscuit',
					canPurchase: false
			},
			{
					name: 'Rice',
					price: 3.95,
					description: 'Pakistan Rice',
					canPurchase: true
			}]
	


	module.factory('StoreService', function($http){
		return {
			products: function(){
				return data;
			}
		}
	});

	module.factory('MoviesService', function($http){
		var api = 'http://api.trakt.tv/movies/trending.json/727f30091e6f129b9ef01979b5e0c898?callback=JSON_CALLBACK';
		var saveURL = "http://localhost:3000/saveMovie"
		var findURL = "http://localhost:3000/findMovies"
		
		return {
			movies: function(){
				return $http.jsonp(api);
			},

			data: function(){
				return data;
			},

			save: function(movie){
				return $http.post(saveURL, movie);
			},

			find: function(){
				return $http.get(findURL);
			}
		}
	});

	module.controller('MoviesController', function($scope, MoviesService){
		MoviesService.movies().then(function(movies){
			$scope.movies = movies.data;
			angular.forEach($scope.movies, function(movie){
				MoviesService.save({
					title: movie.title,
    				poster: movie.images.poster,
    				overview: movie.overview,
    				trailer: movie.trailer,
    				year: movie.year
				});
			});
		}, function(error){
			$scope.errors = error;
		});
	});

	module.filter('yearFilter', function(){
		return function(input){
			return input.filter(function(movie){
				return movie.year < 2012
			});
		}
	});

	module.controller('StoreController', function($scope, StoreService){
			var data = StoreService.products();
			$scope.product = data[0];
	});
})(angular.module('store', []));


