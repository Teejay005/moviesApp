// var expect = chai.expect;
describe('Movies Service', function(){
	var moviesService;
	var httpBackend;
	var api = 'http://api.trakt.tv/movies/trending.json/727f30091e6f129b9ef01979b5e0c898?callback=JSON_CALLBACK';

	beforeEach(function(){
		module('store');
		inject(function(MoviesService, $httpBackend){
			moviesService = MoviesService;
			httpBackend = $httpBackend;
			httpBackend.expectJSONP(api).respond('200', '');
		});
	});

	it('should get movies from tracktv api', function(done){
		moviesService.movies().then(function(result){
			done();
			expect(result).toEqual('x');
		});
	});

});