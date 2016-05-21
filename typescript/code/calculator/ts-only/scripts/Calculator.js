/*   /// <reference path="IMathOps.ts" /> */
var GDMath;
(function (GDMath) {
    var Calculator = (function () {
        function Calculator() {
        }
        Calculator.prototype.add = function (x, y) {
            return this._addHelper(x, y);
        };
        ;
        Calculator.prototype.substract = function (x, y) {
            return x - y;
        };
        ;
        Calculator.prototype.multiply = function (x, y) {
            return x * y;
        };
        ;
        Calculator.prototype.divide = function (x, y) {
            return x / y;
        };
        ;
        Calculator.prototype._addHelper = function (x, y) {
            return x + y;
        };
        ;
        return Calculator;
    })();
    GDMath.Calculator = Calculator;
})(GDMath || (GDMath = {}));
