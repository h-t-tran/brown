Calculator = (function() {
	'use strict';

	function Calculator() {
		this._result = -1;
	}

	Calculator.prototype.add = function(x, y) {
		this._result = x + y;
		return this._result;
	};


	Calculator.prototype.substract = function(x, y) {
		this._result = x - y;
		return this._result;
	};

	Calculator.prototype.multiply = function(x, y) {
		this._result = x * y;
		return this._result;
	};

	Calculator.prototype.divide = function(x, y) {
		if(y === 0) {
			return 0;
		}
		else {
			return x / y;
		}
	};

	return Calculator;
}());

