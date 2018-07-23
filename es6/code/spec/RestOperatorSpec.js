describe("RestOperator", function () {

    it("should invoke callback", function () {

        function spreadFunc(age, name, occupation) {

            console.info("age ", age);
        }

        let person = {
            age: 21,
            name: 'John',
            occupation: 'sales'
        };

        spreadFunc(person);

        expect(person2.age).toBe(21);
    });

});
