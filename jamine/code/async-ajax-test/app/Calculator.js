var Calculator = function() {
	this._result = -1;
};

Calculator.prototype.configure = function(successCallback, errorCallback) {
	$.ajax({
		url: "https://api.github.com/repos/vmg/redcarpet/issues?state=closed",
		success: successCallback,
		error: errorCallback
	});
};

Calculator.prototype.add = function(x, y) {
	this._result = x + y;
	return this._result;
};

// pause few sec then perform add operation.
Calculator.prototype.asyncAdd = function(x, y) {
	var self = this;
	setTimeout(function() {
		self._result = x + y;
	}, 3000);
};

Calculator.prototype.addAndDisplay = function(x, y, domEle) {
	$(domEle).html(a + b);
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


