class AClass {
    method1() {}
    method2() {}
    method3() {}
    method4() {}
}

const a = new AClass();
const b = new AClass();

console.log(a);
console.log(b);
console.log(a === b); // False

// Initialize the Object

class Car {
    constructor(model) {
       this.model = model;
    }

    printThis() {
        console.log(this);
    }
    printModel() {
        console.log(this.model); 
    }
}
const bmwCar = new Car("BMW");
const audiCar = new Car("Audi")

audiCar.printThis();
bmwCar.printModel(); 
console.log(typeof Car);  // Function

// Class as Expression

const makeUser = function() {

}
makeUser();

const Employee = class {
    welcome() {
        console.log("Hello Employee")
    }
}
const emp = new Employee();
emp.welcome();

// Named Class
const Dept = class Department {
    welcome() {
        console.log("Welcome to Department");
        console.log(Department);
    }
};

class Phone {
    brand = "Apple";

    make() {
    console.log(this.brand);
  }
} 
const phone = new Phone(); 
console.log(phone);
phone.make(); // "Apple"

// Getters and Setters
class Animal {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return `The animal name is ${this._name}`;
    }

    set name(value) {
        if(!value) {
            console.warn("A name is mandatory!");
            return;
        }

        if(value.length < 2) {
            console.warn("The name must be of 2 or more characteristics");
            return;
        }
        this._name = value;
    }
}
const animal = new Animal("Tiger");
console.log(animal.name);

animal.name = "";
console.log(animal.name);

// Static Properties
class MyClass {
    static staticMethod() {
        console.log(this);
    }
}
MyClass.staticMethod();

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`)
    }

    // static utility method

    static isValidEmail(email) {
        // Very basic check
        return email.includes("@") && email.includes(".")
    }

    // Static factory method

    static createGuest() {
        return new User("Guest", "guest@email.com")
    }
}
const user = new User("Tapas", "tapas@gmail.com");
user.greet();
User.isValidEmail("sdcidjckk");

const guestUser = User.createGuest();
guestUser.greet();

// Private and Public
// Public - These fields and methods are accessible from anywhere
// Private - These fields and methods are accessible only from the inside of the class.

class WashingMachine {
    // Public field
    brand;

    // Private field
    #powerStatus = false;
    #currentCycle = null;

    constructor(brand) {
        this.brand = brand;
    }

    start(cycle) {
        if(!this.#powerStatus) {
            this.#turnOn();
        }
        this.#currentCycle = cycle
       // spin
       console.log(`Starting ${cycle} cycle...`);
       this.#spin();
       //drain
       this.#drain();
       //stop
       this.stop();
    }

    stop() {
       // turn off
       this.#turnOff();
       console.log("Washing machine stopped.");
    }

    #turnOn() {
        this.#powerStatus = true;
        console.log("Power ON");
    }
    
    #turnOff() {
        this.#powerStatus = false;
        console.log("Power Off");
    }

    #spin(){
        console.log("Spinning...");
    }

    #drain() {
        console.log("Draining...")
    }
}
const lgWasher = new WashingMachine("LG");
console.log(lgWasher);
lgWasher.start("Quick Wash");
console.log(lgWasher.brand); // LG
//lgWasher.#turnOn(); // SyntaxError

// Extending

class Human {
    species = "Homo Sapiens"; // Public field

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`)
    }
}

class Student extends Human {
     
    constructor(name, age, grade) {
        super(name, age)  // Inherit name and age from human
        this.grade = grade;
    }

    introduce() {   // Polymorphism
        console.log(
            `Hey! I'm ${this.name}, ${this.age} years old and I study in grade $
            {this.grade}.`
        )
    }

    study() {
        console.log(`${this.name} is studying...`)
    }
}

class Teacher extends Human {
    constructor(name, age, subject) {
        super(name, age); // Inherit name and age from Human
        this.subject = subject;
    }

    // Overriding the introduce method
    introduce() {
        console.log(`Hello, I'm ${this.name}, a ${this.subject} teacher`)
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}`)
    }
}
const alice = new Student("Alice", 14, 9);
const bob = new Teacher("Bob", 35, "Mathematics");

alice.introduce();
bob.introduce();

alice.sleep();
bob.sleep();

// OOp with Classes
