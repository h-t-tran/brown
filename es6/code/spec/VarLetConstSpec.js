describe("VarLetConst", function () {
    it("should show var has global scope once defined", function () {
        function execute(flag) {
            if(flag) {
                // once define, it has scope outside of the if block
                var result = "done";
            }

            return result;
        }

        expect(execute(true)).toBe("done");
    });

    xit("should show let has block scope", function () {
        function execute(flag) {
            if(flag) {
                // once define, it has scope outside of the if block
                let result = "done";
            }

            // should cause failure.
            return result;
        }
        expect(execute(true)).toBeFalsy();
    });

    it("should show let has block scope", function () {
        function execute(flag) {
            if(flag) {
                // once define, it has scope outside of the if block
                let result = "done";
                return result;
            }
        }
        expect(execute(true)).toBe("done");
    });

    xit("should not be able to change const", function () {
        const MAX = 80;
        // error
        MAX = 90;
        expect(MAX).toBe(80);
    });
});
