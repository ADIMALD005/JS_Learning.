"use strict";
// when the above is used in the code , "this" keyword wouldn't be refer to window object in the stand alone functin

//this - it is referring to the object on which we have invoke the method

// object
// function

// Inside of an Object - Implicit Binding

// Implicit binding - It's a way in which in which if a method is called on an object
// using the dot notation, the context of "this" is bound / associated to the object
// on  which we have invoke the method.

const employee = {
    id: "A5778",
    firstName: "Alex",
    lastName: "B",

    returnThis : function() {
        return this;
    },

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log("Employee Id", employee.id); // "A5778"
console.log("this inside the employee object", employee.returnThis()) // therefore will return all employee function

console.log("Constructed Full Name using this", employee.getFullName());


const tom = {
    name: "tom",
    age: 7
}

const jerry = {
    name: "jerry",
    age: 3
}

function greetMe(obj) {
    obj.logMessage = function() {
        console.log(`${this.name} is ${this.age} years old`)
    }
    
    console.log(obj);
}

greetMe(tom);
tom.logMessage(); // tom is 7 years old

greetMe(jerry);
jerry.logMessage(); // jerry is 3 years old


// Inside Function

function outer(a) {
    console.log("this inside an outer function", this);

    return function inner(b) {
        console.log("this inside an innerr function", this);
    }
    outer();
}

const outerResult = outer(5); // undefined
outerResult(5) // undefined
// for regular stand alone function , "this" will be undefined

// Inside the Arrow Function

const getFood = () => this; 

console.log("this inside the arrow function defined in global scope", getFood()); // window object

// for regular stand alone function but arrow, "this" will be window object


const food = {
    name: "mango",
    color: "yellow",

    //getDesc: () => `${this.name} is ${this.color}` // undefined
    
    /* getDesc: function() {
        return `${this.name} is ${this.color}`
    }*/
   
    getDesc: function()  { // Regular function - has its own 'this'
    // Inside here, 'this' refers to the food object

        return () => `${this.name} is ${this.color}` // mango is yellow
    }
}

//The arrow function "inherits" or "captures" the this from its surrounding 
// scope (the regular function), not because it has a name.


const descFunc = food.getDesc()
console.log(descFunc()); // mango is yellow


// Explicit Binding - call, apply, bind

// The call method

function greeting() {
    console.log(`Hello, ${this.name} belongs to ${this.address}`)
}

const user = {
    name: 'tapaScript',
    address: 'All of you!'
};

greeting.call(user);

const likes = function(hobby1, hobby2) {
    console.log(this.name + ` likes ` + hobby1 + ',' + hobby2);
}

const person = {
    name: 'Tapas'
}

likes.call(person, "Teaching", "Blogging");

// If not to be stressing yourself for the argument // use bind

// apply() - passing an argument in array form

const hobbiesToApply = ["Sleeping", "Eating"];

likes.apply(person, hobbiesToApply);


// bind() - creates a new function with a fixed this value.

const newHobbies = function(hobby1, hobby2) {
    console.log(this.name + 'likes' + hobby1 + ',' + hobby2);
}

const officer = {
   name: "Bob"
};

const newFn = newHobbies.bind(officer, "Dancing", "Singing");
newFn();


// The new binding

const Cartoon = function(name, animal) {
    this.name = name;  // Sets the object's name property
    this.animal = animal;
    this.log = function() {
        console.log(this.name + " is a " + this.name);
    }

};

/* 
    this.name = name;
    this is a line of code that assigns the value stored in the variable 
    name to a property called name on the current object (represented by this).
*/
const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();



const obj = {
   name: "John",
   greet: function () {
    console.log(`Hello, ${this.name}!`);
    },
}

const greetFn = obj.greet;
greetFn.call(obj);