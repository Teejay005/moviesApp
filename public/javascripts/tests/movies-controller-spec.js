// var expect = chai.expect;
describe('Movies Controller', function(){
	var mockMoviesService;
	var scope;
	var moviesPromise;
	var stubMovies = {
		data: {
		title: "Titanic",
		year: "2014"
	}};

	beforeEach(function(){
		module('store');

		moviesPromise = jasmine.createSpyObj('moviesPromise', ['then']);
		moviesPromise.then.andCallFake(function(callback){
			return callback(stubMovies);
		});

		mockMoviesService = jasmine.createSpyObj('mockMoviesService', ['movies'])
		mockMoviesService.movies.andReturn(moviesPromise);

		module(function($provide){
			$provide.value('MoviesService', mockMoviesService);
		});

		inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			$controller('MoviesController', {$scope: scope, MoviesService: mockMoviesService})
		});
	});

	it('should have list of all movies', function(){
		scope.$apply();
		expect(scope.movies).toEqual(stubMovies.data)
	});
});