describe("Default Parameter", function () {

    it("should use the older convention for 'default' value", function () {
        function upperCase(name) {
            name = name || "na";
            return name.toUpperCase();
        }

        expect(upperCase()).toBe("NA");
    });

    it("should use default parameter", function () {
        function upperCase(name = "NA") {
            return name.toUpperCase();
        }

        expect(upperCase()).toBe("NA");
    });

});
