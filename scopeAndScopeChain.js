// There are four types of a scope

// 1. Global scope
// 2. function scope
// 3. block scope
// 4. module scope


// Global scope
// It is a variable declare outside of any function or block scope are global scope

var name = "Tapas";

function greeting() {
    console.log("Hello", name);
}

greeting();

console.log(name); // "Tapas"

{
    console.log("Inside Block", name);
}

// Note - whenever a "Var" in the global scope the particular variable becomes
// the property of the global object (but wont happen for let)



//function scope - variable declare inside a function are only accessible 
// within that function

function toDo() {
    var task = "Learning 40 days of JS";
    console.log(task);
}

toDo();

console.log(task); // ReferenceError



//Block scope - Variables declared using let and const (except const) inside {} cannot be accessed outside the block

{
    let count = 10;
    console.log(count);
}

console.log(count); // ReferenceError

{
    var count = 10;
    console.log(count); // 18
}

console.log(count); // 18 (Because it is declared with var)


//Scope chain

let globarVar = "I am a Global Variable";

function outer() {
    let outerVar = "I am an outer variable";

    function inner() {
        let innerVar = "I am an Inner Variable";

        console.log(innerVar); // "I am an Inner Variable";
        console.log(outerVar); //  "I am an outer variable";
        console.log(globarVar); // "I am a Global Variable";
    }

    inner();
}

outer();

console.log(outerVar); // ReferenceError


var count = 10;

function outer() {
    var count = 20;

    function inner() {
        var count = 30;
        console.log(count); // 30
    }
    inner();
    console.log(count); // 20
}

outer();
console.log(count); // 10;


//Variable shadowing // when var in the outer has the same name as inner var

let message = "I am doing great";

function situation() {
    let message = "I am not doing great"
    console.log(message); // I am not doing great
}

situation();
console.log(message); // I am doing great

//Note - Do not use a var in a for loop


