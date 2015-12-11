
describe("Calculator", function() {

  var _calc;
  
  describe('add', function() {
		var _ele;

		beforeEach(function() {
			_calc = new Calculator();
			_ele = document.createElement("testElement");
		});

		afterEach(function() {
			delete _ele;
		});

		it('should returns 5 when 2 + 3', function() {

			//
			// Arrange
			//
			var element = $(_ele);

			//
			// Act
			//
			var res = _calc.addAndDisplay(2,3, element);

			//
			// Assert
			//
			expect(element.val()).toBe('5');
		});


  });

});
