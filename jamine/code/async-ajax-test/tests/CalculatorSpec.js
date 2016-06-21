
describe("Calculator", function() {

	var _calc;


	describe('configure function', function() {
		beforeEach(function() {
			_calc = new Calculator();
		});

		xit('should invoke call $.ajax() once', function() {

			//
			// Arrange
			//
			var isSuccess;

			// !!!  this calls the real ajax function.  See Network tab. !!!
			spyOn($, 'ajax').and.callThrough();


			//
			// Act
			//
			_calc.configure(function() { isSuccess = true;	},
							function() { isSuccess = false;	});

			//
			// Assert
			//
			expect($.ajax).toHaveBeenCalled();
			expect($.ajax.calls.count()).toEqual(1);
		});

		xit('should invoke success callback if REST call is successful', function() {

			//
			// Arrange
			//
			var isSuccess;

			// arg is an object that Jasmine will pass to our supplied function.
			// arg has the following properties:
			// {
			//		url: ...,
			//		success: function(result){},
			//		error: function(error){}
			//  }
			//
			// 	!!! No real ajax call. !!!  Verify in Network tab.
			//
			// The follow code is read as follow:
			// "When $ajax() function is called, the provided callback function(arg) will be invoked.
			//  Then we call success() to simulate a successful REST call"
			//
			spyOn($, 'ajax').and.callFake(function( arg ) {

				// mock a success $.ajax() calls.
				console.debug("Invoking mock $.ajax() success call.");

				// call to success() to simulate success response
				arg.success();
			});


			//
			// Act
			//
			_calc.configure(function() {
						console.debug("configure() success callback");
						isSuccess = true;
					}, function() {
						console.debug("configure() failed callback");
						isSuccess = false;
					});

			//
			// Assert
			//
			expect(isSuccess).toBe(true);
		});

		it('should invoke error callback if REST call failed', function() {

			//
			// Arrange
			//
			var isSuccess;

			// arg is an object passed to $.ajax().  It has the following properties:
			// {
			//		url: ...,
			//		success: function(result){},
			//		error: function(error){}
			//  }
			//
			// 	!!! No real ajax call. !!!
			spyOn($, 'ajax').and.callFake(function( arg ) {
				// mock a success $.ajax() calls.
				console.debug("Invoking mock $.ajax() success call.");
				arg.error()
			});


			//
			// Act
			//
			_calc.configure(function() {
					console.debug("configure() success callback");
					isSuccess = true;
				}, function() {
					console.debug("configure() failed callback");
					isSuccess = false;
				});

			//
			// Assert
			//
			expect(isSuccess).toBe(false);
		});
	});


});
