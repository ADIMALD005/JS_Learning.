// In global execution context : It is divided into two (a) creation ohase (b)Exection phase

// (a) Creation phase

// 1. "this" is created 
// 2. getting/creation of a window object
//3. window === this

var name = "Tom";

function sayName() {
    console.log(this.name);
}

//4. Allocate memory for variable name and function sayname()
//5. name will be initialized by undefined
//6. The function body will be placed directly into the memory

// (b). Execution phase

//1.It will assign the value "Tom" to the variable name

console.log("Inside Global testme Execution context");

var a = 5;
function testMe() {
    console.log("Inside testMe Execution context");
    var b = 10;
    var user = {
        name: "tapas",
        country: "India"
    }
    function testAgain() {
        console.log("Inside testAgain Execution context");
        console.log("Exiting testAgain Execution context");
    }
    testAgain();
    console.log("Exiting testMe Execution context");
} 
testMe();
console.log("Exiting Global Execution context");
// Execution function context;

// for above
/*
GEC
  CP
  a: undefined
  testMe:function in memory
  EP:
  a:5
  testMe: Execute
    EFC(for testMe())
      CP:
       b:undefined
       user:undefined
       testAgain:f() in memory
      EP:
      b:10
      user:{name: "tapas",...}
      testAgain: Execute
        FEC(for testAgain())
         CP:
         EP:
        */