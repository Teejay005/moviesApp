// var expect = chai.expect;
describe('Store Controller', function(){
var scope;
var mockStoreService;

	beforeEach(function(){
		module('store');

		mockStoreService = jasmine.createSpyObj('mockStoreService', ['products'])
		mockStoreService.products.andReturn([{price: 3.00}]);

		
		module(function($provide){
			$provide.value('StoreService', mockStoreService)
		});

		inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			$controller('StoreController', {$scope: scope,StoreService: mockStoreService})
		});
	});

	it('should show products', function(){
		scope.$apply();
		expect(scope.product.price).toEqual(3.00);
	});

	it('should add two numbers', function(){
		expect(2+1).toEqual(4);
	});

});