// Polymorphism

// Definition: Methods behave directly based on object type.

class Car {
    drive() {
        console.log("Driving on fuel");
    }
}

class ElectricCar extends Car {
    drive() {
        console.log("Driving on Electricity")
    }
}

const myCars = [new Car(), new ElectricCar()];
myCars.forEach(car => car.drive());