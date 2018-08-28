describe("class", function () {

    it("should create the class using ES5", function () {

        var Shape = function() {
            this.type = "generic type";
        };

        Shape.prototype.getType = function() {
            return this.type;
        };

        Shape.prototype.area = function() {
            return 0;
        };


        var shape = new Shape();

        expect(shape.getType()).toBe("generic type");
        expect(shape.area()).toBe(0);
    });

    it("should create the class using ES6", function () {

        class Shape {
            constructor() {
                this.type = "generic type";
            }

            getType() {
                return this.type;
            }

            area() {
                return 0;
            }
        }



        var shape = new Shape();

        expect(shape.getType()).toBe("generic type");
        expect(shape.area()).toBe(0);
    });

    it("should create subclass class", function () {

        class Shape {
            constructor() {
                this.type = "generic type";
            }

            getType() {
                return this.type;
            }

            area() {
                return 0;
            }
        }

        class Circle extends Shape {
            constructor(r) {
                super();
                this.type = "circle";
                this.radius = r;
            }

            area() {
                return this.radius * this.radius * Math.PI;
            }
        }



        var shape = new Circle(2);

        expect(shape.getType()).toBe("circle");
        expect(shape.area()).toBe(12.566370614359172);
    });
});
