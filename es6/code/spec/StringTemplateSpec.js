describe("StringTemplate", function () {
    it("should generate correct string", function () {
        let firstname = 'john';
        let lastname = 'doe';
        let fullname = `My name is ${firstname} ${lastname}`;
        expect(fullname).toBe("My name is john doe");
    });

});
