SciCalculator = (function() {
	'use strict';

	/**
	 * @constructor
     */
	function SciCalculator() {
		// call parent version
		Calculator.call(this);
	}

	/**
	 * create inheritance
     */
	SciCalculator.prototype = Object.create(Calculator.prototype, {
		constructor: {
			configurable: true,
			enumerable  : true,
			value       : Calculator,
			writable    : true
		}
	});

	/////////////////////////////////////////////
	// public methods
	//
	SciCalculator.prototype.sin = function(x) {
		return Math.sin(x);
	};

	return SciCalculator;
}());

