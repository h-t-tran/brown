describe("SpreadOperator", function () {
    it("should make a copy a single object", function () {
        let person = {
            age: 21,
            name: 'John',
            occupation: 'sales'
        };

        // instead of
        // person2.age = person.age
        // person2.name = person.name
        // person2.occupation = person.occupation
        //
        // We made a copy of person.
        let person2 = {...person};

        // change the original version to make sure a copy is made
        person.name = "jane";
        person.age = 18;

        expect(person2.age).toBe(21);
        expect(person2.name).toBe("John");
        expect(person2.occupation).toBe("sales");
    });

    it("should make a copy of multiple objects", function () {
        let person = {
            age: 21,
            name: 'John',
            occupation: 'sales'
        };

        let otherInfo = {
            socialNumber: "123-45-6789",
            phoneNumber : "222-3333"
        };


        // instead of
        // lotOfInfo = {
        //     age: person.age,
        //     name: person.name,
        //     occupation: person.occupation,
        //     socialNumber: otherInfo.socialNumber,
        //     phoneNumber: otherInfo.phoneNumber
        // }
        let lotOfInfo = {...person, ...otherInfo};

        expect(lotOfInfo.age).toBe(21);
        expect(lotOfInfo.socialNumber).toBe("123-45-6789");
        expect(lotOfInfo.phoneNumber).toBe("222-3333");
    });

    it("should spread an array", function () {

        function sum(x, y, z ) {
            return x + y + z;
        }

        var addens = [5, 6, 7];

        // instead of sum(addens[0], addens[1], addens[2]);
        let res = sum(...addens);

        expect(res).toBe(18);
    });
});
