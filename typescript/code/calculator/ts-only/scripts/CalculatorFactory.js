/// <reference path="IMathOps.ts" />
/// <reference path="Calculator.ts" />
/// <reference path="SciCalculator.ts" />
var GDMath;
(function (GDMath) {
    (function (CalcType) {
        CalcType[CalcType["BASE_CALC"] = 0] = "BASE_CALC";
        CalcType[CalcType["SCI_CALC"] = 1] = "SCI_CALC";
    })(GDMath.CalcType || (GDMath.CalcType = {}));
    var CalcType = GDMath.CalcType;
    var CalculatorFactory = (function () {
        function CalculatorFactory() {
        }
        CalculatorFactory.createCalc = function (type) {
            var resultCalc;
            if (type == CalcType.BASE_CALC) {
                resultCalc = new GDMath.Calculator();
            }
            else if (type == CalcType.SCI_CALC) {
                resultCalc = new GDMath.SciCalculator();
            }
            return resultCalc;
        };
        return CalculatorFactory;
    })();
    GDMath.CalculatorFactory = CalculatorFactory;
})(GDMath || (GDMath = {}));
