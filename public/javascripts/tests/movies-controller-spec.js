// var expect = chai.expect;
describe('Movies Controller', function(){
	var mockMoviesService;
	var scope;
	var moviesPromise;
	var defer;
	var q;
	var stubMovies = {
		data: {
		title: "Titanic",
		year: "2014"
	}};

	beforeEach(function(){
		module('store');

		mockMoviesService = jasmine.createSpyObj('mockMoviesService', ['movies'])

		module(function($provide){
			$provide.value('MoviesService', mockMoviesService);
		});

		inject(function($controller, $rootScope,$q){
			q = $q;
			defer = q.defer();
			mockMoviesService.movies.andReturn(defer.promise);
			scope = $rootScope.$new();
			$controller('MoviesController', {$scope: scope, MoviesService: mockMoviesService})
		});
	});

	it('should have list of all movies', function(){
		defer.resolve(stubMovies);
		scope.$apply();
		expect(scope.movies).toEqual(stubMovies.data);
		expect(scope.errors).toBeUndefined();
		expect(mockMoviesService.movies).toHaveBeenCalled();
	});

	it('should not have list of all movies', function(){
		defer.reject('data not found');
		scope.$apply();
		expect(scope.errors).toEqual('data not found');
		expect(scope.movies).toBeUndefined();
		expect(mockMoviesService.movies).toHaveBeenCalled();
	});
});


