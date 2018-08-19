describe("Default Parameter", function () {

    it("should swap variables: z = x, x = y, y = z", function () {

        let x = 1;
        let y = 2;
        let z = 3;

        // Instead of:
        // let saveX = x;
        // let saveY = y;
        // let saveZ = z;
        // z = saveX;
        // y = saveZ;
        // x = saveY;

        // RHS is an array
        // LHS is not an array.  It's destructuring notation.
        [z, x, y] = [x, y, z];

        expect(z).toBe(1);
        expect(x).toBe(2);
        expect(y).toBe(3);
    });

    it("should assign variable", function () {
        function getPerson() {
            return {
                firstName: 'john',
                lastName: 'doe',
                additional: {
                    phoneNumber: "123-456-7890"
                }
            }
        }

        // we want to get the person and assign
        //  - the first name to 'first' variable
        //  - the last name to 'last' variable
        //  - the phone number to 'phone' variable
        // let person = getPerson();
        // let first = person.firstName;
        // let last = person.lastName;
        // let phone = person.phoneNumber;

        // Using destructure
        let { firstName: first,
              lastName: last,
              additional: {
                    phoneNumber: phone
              }
            } = getPerson();

        expect(first).toBe("john");
        expect(last).toBe("doe");
        expect(phone).toBe("123-456-7890");
    });

    it("should accept input parameters", function () {
        function execute(name, { age, phone }) {
            return name + " " + age + " " + phone;
        }

        let johnInfo = { age: 21, phone: "123-456-7890" };

        // ES5 way
        // execute("john", johnInfo.age, johnInfo.phone)
        // ES6
        let res = execute("john", johnInfo);

        expect(res).toBe("john 21 123-456-7890");
    });


});
