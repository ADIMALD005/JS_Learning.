// Abstraction
// Definition: Hiding Internal details and showing only essential features.

class Car {
    startEngine() {
        this.#injectFuel();
        this.#ignite();
        console.log("Engine started");
    }
    
    #injectFuel() {
        console.log("Fuel injected");
    }

    #ignite() {
        console.log("Spark generated");
    }
}

const car = new Car();
car.startEngine();