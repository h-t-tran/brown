/// <reference path="Calculator.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GDMath;
(function (GDMath) {
    var SciCalculator = (function (_super) {
        __extends(SciCalculator, _super);
        function SciCalculator() {
            _super.apply(this, arguments);
        }
        SciCalculator.prototype.add = function (x, y) {
            return _super.prototype._addHelper.call(this, x, y);
        };
        SciCalculator.prototype.sin = function (x) {
            return Math.sin(x);
        };
        return SciCalculator;
    })(GDMath.Calculator);
    GDMath.SciCalculator = SciCalculator;
})(GDMath || (GDMath = {}));
//# sourceMappingURL=SciCalculator.js.map