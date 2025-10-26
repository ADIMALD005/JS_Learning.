// function

//function Declaration

function printMe() {
    console.log('printing...');
}

//or

const printMe = function() {
    console.log('printing...')
}

//Parameters:
// They act as placeholders for the values that will be passed to the functions when it is called 

// //Arguments:
// /* They are the actual values passed to the functions when it is called */


function sum(a, b) {
    const result = a + b;
    console.log(result)
}
sum(10, 4);

//Returning a function

function sum(a, b) {
    const result = a + b;
    //console.log(result);
    return result;
}
let result = sum(10, 9);

function double(x) {
    return 2 * x;
}

console.log(double(result));

//Default parameter

function calc(a, b=0) {
    return (2 * (a + b));
}
const resVar = calc(3);
console.log(resVar); // 6

//rest parameter are something that allows function to accept any number of argument as an array
//A function must have only one rst parmaeter and must be declared last for the function

function collectThings(x, ...y) {
   console.log(x); // Output - 1
   console.log(y); // Output - [2, ,3, 4, 5, 6, 7, 8, 9]
}

//Arrow functions

const add = (x, y) => {
    return x + y;
}
add(2, 3);

// If writing one parameter

const adds = (x, y) => x + y;

//Nested function

function outer() {
    console.log("Outer");

    return function inner() {
        console.log("inner");
    }

    inner();
}

let retFunc = outer();
console.log(retFunc());

//function Scope
//Scope:
// The visibility and accessibility of variables in different parts of your code

//local scope - Variables declared inside a function are only accessible within that function

function doSomething() {
    let x = 10;
    const y = 20;
    var z = 30;

    console.log(x, y, z); // 10 20 30;
}
// Global Scope
//Variables declared outside any function or block are globally scoped and accessible from anywhere in the program.

var x = 10;
const y =20;
let z = 30;

function doSomethings() {
    console.log(x, y, z) //
}

doSomethings(); // 10 20 30.

// Closure - A closure is when an inner function has access to variables from its outer (enclosing) function, even after the outer function has finished executing.

function outer(x) {
    function inner(y) {
        return x + y;
    }
    return inner;  // Returns the FUNCTION itself
}
const outerReturn = outer(10); // x = 10, so now it's "10 + y"
outerReturn(5);   // y = 5, so: 10 + 5 = 15


//CallBack function - A callback function is a function that is passed as an argument to another function and is called (executed) later.

// Function that has no name is called anonymous function

//In code terms: You give a function to another function and say "use this when you're done with your work!"

function foo(func) {
   console.log("foo");

   func();
}

foo(function() {
    console.log("buz");
});

//pure function
//they provide same output

function greeting(name) {
    return "Hello" + name;
}
greeting("Fateemah");
greeting("Fateemah");

// Higher order function - function that can take more than one argument

function getCamera(camera) {
    func();
}

getCamera(function() {
    console.log("sony");
});

function returnFunc() {
    return function() {
        console.log("hello")
    }
}

const retFunct = returnFunc()
retFunc(); // hello

//IIFE(Immediately Invoked function Expression)
//They are invoked immediately without calling the function

// in passing argument 
(function (count) {
    console.log("IIFE", count);
})(1); //1 is the argument for the immediate function

//function Execution

function f1() {
    console.log("I'm the first function")
}

function f2() {
    console.log("I'm the second second function");
    f1();
}

function f3(){
    console.log("I'm the third function");
    f2();
}
f3();

//Recursion - A function calling itself

/*
function foo() {
    foo();
}
*/

function fetchWater(count) {
    console.log("Fetching Water...", count);
    if(count === 0){
        console.log("No more water to fetch");
        return; // Ends the current function immediately
    }
    fetchWater(count - 1);
}
fetchWater(5);



