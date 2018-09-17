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
