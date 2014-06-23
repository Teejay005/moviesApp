describe('movies', function(){
	var ptor;

	beforeEach(function() {
	    ptor = protractor.getInstance();
	    ptor.ignoreSynchronization = true;
 	});

	it('should have total movies', function(){
		ptor.get('http://localhost:3000/movies');

		var movies = element(by.repeater('movie in movies')).column('movie.year');
		// var title = element(by.id('move'));

		expect(movies.getText()).toBe('Movies');
	});
});