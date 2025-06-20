class Car {
    constructor(color, type, year, make, model) {
        this.color = color;
        this.type = type;
        this.year = year;
        this.make = make;
        this.model = model;
        this.mileage = 0;
        this.dirtiness = 0;
    }

    drive(miles) { // Do NOT use arrow functions here!!!!
        this.mileage += miles;
        this.dirtiness += Math.floor(miles / 50);
        return this; // For chaining
    }
    
    rotateTires() {
        console.log("Rotating tires!");
        return this; // For chaining
    }
    
    clean() {
        this.dirtiness = 0;
        return this; // For chaining
    }
}

let adriansCar = new Car("red", "convertible", 2025, "Chevrolet", "Corvette");
console.log(adriansCar.make);
console.log(adriansCar.mileage);
adriansCar.drive(150);
console.log(adriansCar.mileage);

adriansCar.rotateTires();
console.log(adriansCar.dirtiness);
adriansCar.clean();
console.log(adriansCar.dirtiness);
adriansCar.drive(700).drive(800).clean(); // Chaining
console.log(adriansCar.mileage);
