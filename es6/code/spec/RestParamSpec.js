describe("RestParameter", function () {

    it("should display all input arguments", function () {

        function printUser(name, ...additional) {
            let result = name;
            additional.forEach((item)=>{
                result += " " + item;
            });

            return result;
        }

        let res = printUser("john", "1st ave", 21);

        expect(res).toBe("john 1st ave 21");
    });

    it("should forward all parameters", function () {

        function corePrintUser(name, address, age, phone ) {
            let result = name + " " + address + " " + age + " " + phone;
            return result;
        }

        // no need to repeat the param list of corePrintUser
        function printUser(...args) {

            // use the spread operator.
            return corePrintUser(...args)
        }

        let res = printUser("john", "1st ave", 21, "(858)123-45678");
        expect(res).toBe("john 1st ave 21 (858)123-45678");
    });

});
