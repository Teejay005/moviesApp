describe('Movies', function(){

	it('should have total movies', function(){
		browser.get('http://localhost:3000/movies');

		var movies = element(by.binding('movies.length'))
		// var title = element(by.id('move'));

		expect(movies.getText()).toEqual('Total Movies: 265');
	});
});