// var expect = chai.expect;
describe('Movies Service', function(){
	var moviesService;
	var httpBackend;
	var apiURL = 'http://api.trakt.tv/movies/trending.json/727f30091e6f129b9ef01979b5e0c898?callback=JSON_CALLBACK';

	beforeEach(function(){
		module('store');
		inject(function(MoviesService, $httpBackend){
			moviesService = MoviesService;
			httpBackend = $httpBackend;
		});

		httpBackend.whenJSONP(apiURL).respond(201,'');
	});

	it('should get movies from tracktv api', function(){
		moviesService.movies().then(function(data){
			console.log(data);
			expect(data).toBe(9);
		})
	});

});