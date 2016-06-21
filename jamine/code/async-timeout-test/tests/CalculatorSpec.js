
describe("Calculator", function() {

	var _calc;


	describe('asyncAdd', function() {
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

		console.debug("Starting of 'slow' tests.  Time = ",Math.ceil( (new Date()).getTime() / 1000), " sec");

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
			console.debug("1st test.  time ",Math.ceil( (new Date()).getTime() / 1000), " sec");

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

				// call done() before the 5000 ms expires otherwise Jasmine will fail the test.
				done();

			   // wait 100 ms longer than the time it takes asyncAdd() to complete to give
			   // asyncAdd() a chance to complete.
			}, 3100);

		   // if the test is not complete in 5000 ms, it will be consider failure.
		}, 5000);

		//
		// this test will not start until the first test above is done() OR
		// when 5000 expires
		//
		it('should not have result equals 5 before 3000 ms', function(done) {
			//
			// Arrange
			//
			console.debug("2nd test.  time ",Math.ceil( (new Date()).getTime() / 1000), " sec");

			//
			// Act
			//
			_calc.asyncAdd(2, 3);


			//
			// Assert
			//
			setTimeout( function() {
				// since the timeout expires 1000 ms which is much sooner than when asyncAdd()
				// is schedule to complete after 3000 ms.
				//  As the result it will not be 5!
				expect(_calc._result).not.toBe(5);

				// call done() before the 4000 ms expires otherwise Jasmine will fail the test.
				done();

			   // wait 1000 ms which is LESS than the time it takes asyncAdd() to complete
			}, 1000);

		}, 5000);

	});

	xdescribe('asyncAdd  using jasmine.clock to make the tests faster.', function() {

		console.debug("Starting of 'faster' tests.  Time = ",Math.ceil( (new Date()).getTime() / 1000), " sec");

		beforeEach(function() {
			_calc = new Calculator();
			_calc._result = 0;

			// set up the clock
			jasmine.clock().install()
		});

		afterEach(function() {

			// must tear down the clock
			jasmine.clock().uninstall()
		});


		it('should have result equals 5 after 3000 ms', function() {
			//
			// Arrange
			//
			console.debug("1st test.  time ",Math.ceil( (new Date()).getTime() / 1000), " sec");

			//
			// Act
			//
			_calc.asyncAdd(2, 3);

			// Speed up the timer by 3100 ms
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
			console.debug("2nd test.  time ",Math.ceil( (new Date()).getTime() / 1000), " sec");

			_calc.asyncAdd(2, 3);

			// Speed up the timer by 1000 ms
			jasmine.clock().tick(1000);

			//
			// Assert
			//
			expect(_calc._result).not.toBe(5);
		});

	});
});
