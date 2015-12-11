
describe("Calculator", function() {

	var _calc;


	xdescribe('asyncAdd', function() {
		beforeEach(function() {
			_calc = new Calculator();
			_calc._result = 0;
		});

		it('should fail to return 5 because it is async', function() {
			//
			// Arrange
			//

			//
			// Act
			//
			_calc.asyncAdd(2,3);

			//
			// Assert
			//
			expect(_calc._result).not.toBe(5);
		});
	});

	xdescribe('asyncAdd using done callback', function() {

		beforeEach(function() {
			_calc = new Calculator();
			_calc._result = 0;
		});

		//
		// Jasmine executes and pause this test for maximum of 5000 ms.
		// If done() is not called, then the test fails.
		//
		it('should have result equals 5 after 3000 ms', function(done) {
			//
			// Arrange
			//
			console.debug("1st test.  time ",(new Date()).getTime() / 1000, " sec");

			//
			// Act
			//
			_calc.asyncAdd(2, 3);


			//
			// Assert
			//
			setTimeout( function() {
				// when timeout expires check the result and call done callback to
				// start next test.
				expect(_calc._result).toBe(5);
				done();
			}, 3100);

		}, 5000);

		//
		// this test will not start until the done() is called in the first test OR
		// when 5000 expires
		//
		it('should not have result equals 5 before 3000 ms', function(done) {
			//
			// Arrange
			//
			console.debug("2nd test.  time ",(new Date()).getTime() / 1000, " sec");

			//
			// Act
			//
			_calc.asyncAdd(2, 3);


			//
			// Assert
			//
			setTimeout( function() {
				expect(_calc._result).not.toBe(5);
				done();
			}, 1000);

		}, 4000);

	});

	describe('asyncAdd  using jasmine.clock', function() {

		beforeEach(function() {
			_calc = new Calculator();
			_calc._result = 0;
			jasmine.clock().install()
		});

		afterEach(function() {
			jasmine.clock().uninstall()
		});


		it('should have result equals 5 after 3000 ms', function() {
			//
			// Arrange
			//
			console.debug("1st test.  time ",(new Date()).getTime() / 1000, " sec");

			//
			// Act
			//
			_calc.asyncAdd(2, 3);
			jasmine.clock().tick(3100);


			//
			// Assert
			//
			expect(_calc._result).toBe(5);
		});

		//
		// this test will not start until the done() is called in the first test OR
		// when 5000 expires
		//
		it('should not have result equals 5 before 3000 ms', function() {
			//
			// Arrange
			//

			//
			// Act
			//
			console.debug("2nd test.  time ",(new Date()).getTime() / 1000, " sec");
			_calc.asyncAdd(2, 3);
			jasmine.clock().tick(1000);

			//
			// Assert
			//
			expect(_calc._result).not.toBe(5);
		});

	});
});
