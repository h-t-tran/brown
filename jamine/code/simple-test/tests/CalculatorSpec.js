
describe("Calculator", function() {

  var _calc;
  
	describe('add', function() {

		beforeEach(function() {
			_calc = new Calculator();
		});

		afterEach(function() {

		});

		it('should returns 5 when 2 + 3', function() {
			//
			// Arrange
			//

			//
			// Act
			//
			var res = _calc.add(2,3);

			//
			// Assert
			//
			expect(res).toBe(5);
		});

		it('should returns negative when adding two negative numbers', function() {

			//
			// Arrange
			//

			//
			// Act
			//
		  	var res = _calc.add(-2,-3);

			//
			// Assert
			//
		  	expect(res).toBeLessThan(0);
		});
	});

	describe('divide', function() {

		beforeEach(function() {
			_calc = new Calculator();
		});

		afterEach(function() {

		});

		it('should returns 0 when divide by 0', function() {
			//
			// Arrange
			//

			//
			// Act
			//
			var res = _calc.divide(2,0);

			//
			// Assert
			//
			expect(res).toBe(0);
		});

		it('should return correct fraction when result is fractional', function() {
			//
			// Arrange
			//

			//
			// Act
			//
			var res = _calc.divide( 3, 2 );

			//
			// Assert
			//
			expect(res).toBe( 1.5 );
		});
	});

});
