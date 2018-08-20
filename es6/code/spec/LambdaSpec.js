describe("Lambda", function () {

    it("should invoke callback", function () {
        function invokeCallback(cb) {
            cb(2);
        }

        // ES5:
        // invokeCallback(function(val) {
        //   callbackVal = val;
        // });

        // ES6
        let callbackVal = -1;
        invokeCallback((val) => {
            callbackVal = val;
        });

        expect(callbackVal).toBe(2);
    });

    xit("should show misuse of 'this' ", function (done) {
        this.name = "john";

        setTimeout(function() {
            // this will fail.
            expect(this.name).toBe("john");
            done();
        }, 1000);
    });

    it("should show correct of 'this' with lamda ", function (done) {
        this.name = "john";

        setTimeout(() => {
            expect(this.name).toBe("john");
            done();
        }, 1000);
    });
});
