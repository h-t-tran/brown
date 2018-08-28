describe("GeneratorIterator", function () {

    it("should iterate", function () {
        const genNumber = function* () {
            yield 1;
            yield 2;
        };

        const iter = genNumber();
        expect(iter.next().value).toBe(1);
        expect(iter.next().value).toBe(2);
    });
});
