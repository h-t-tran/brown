var GDCollection;
(function (GDCollection) {
    var Stack = (function () {
        function Stack() {
        }
        Stack.prototype.push = function (obj) {
            this._array.push(obj);
        };
        Stack.prototype.pop = function () {
            return this._array.pop();
        };
        return Stack;
    })();
    GDCollection.Stack = Stack;
})(GDCollection || (GDCollection = {}));
//# sourceMappingURL=Stack.js.map