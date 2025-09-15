console.log("Error Handling");


// What is an Exception in JS?

// Can be defne as runtime errors that disrupt program execution.

// console.log(x); // ReferenceError: x is not defined

// let obj = null;
// console.log(obj.name); // TypeError: cannot read properties of null

// console.log("hi" // syntaxError;

// let arr = new Array(-1) // RangeError

// decodeURIComponent("%") // URIError

// eval("var a = ;"); // EvalError



// try...catch - used in catching error in order to the something with the errors

try {
    // logic or code
} catch (err) {
    // handle error
}

/*
1. code iinside try gets executed.
2. If no error in the try block, the catch block will be ignored and will be executed
3. If there is an error in the try block, the execution of the try block will be
suspended and the control will move the catch block. In the catch block you can find the 
error details and do the needful    
*/

try{
    console.log("Execution starts here");
    abc;
    console.log("Execution ends here");
} 
catch (err) {
    console.error("An Error has occured");
    
    console.log(err.name); // particular error name 
    console.log(err.message); // give the message of the error
    console.log(err.stack); // give the information of sequence of source of all error(can be used to debbug)
}

// Real world use cases

function divideNumbers(a, b){
    try{
       if (b===0) {
           const err = new Error("Division by zero is not allowed.");
           throw err;
       }
       const result = a/b;
       console.log(`The result is ${result}`);
    }
    catch(error){
    console.error("Got a Math Error:", error.message)
    }
}
divideNumbers(15, 3);
divideNumbers(15, 0);


const person = {
    name: "Tapas",
    address: {
        city: "Bangalore"
    }
}

function getPostalCode(user) {
    try{
        console.log(user.address.country.postalCode);
    }
    catch(error) {
      console.error("Error accessing property", error.message)
    }
}
getPostalCode(person);


function validateAge(age){
    try{
      if (isNaN(age)) {
         throw new Error(`Invalid input: Age must be a number.Your input is ${age}`);
      }
      console.log(`User age is: ${age}`);
    }
    catch(error) {
        console.error("Validation Error:", error.message);
    }
}
validateAge(30);
validateAge("Tapas");

// rethrow - Add context without hiding the original error

/* 
You want to log/track the error at multiple levels
You want to add context but still let the caller handle it
You want to clean up resources but not suppress the error
*/


function validateForm(formData) {
    try{
       if (!formData.username) throw new Error("Username is Mandatory");
       if (!formData.email.includes("@")) throw new Error("Invalid email format")
    }
    catch (error) {
        console.log("validation Issues found:", error.message);
        throw error; // rethrow
    }
}

try{
   validateForm({username: "Tapas", email: "bademail"});
}
catch(error){
    console.error("Showing error message for user creation", error.message);
};



//try..catch...finally

//finally - is a block that runs after try and catch, regardless of whether an exception occurred or not.

try{
   // code that may throw an error
}
catch(error) {
  // code to handle the error
}
finally {
  // code that always runs(cleanup) // runs no matter what
}

function processInformation(information) {
    try{
        console.log("processing Information");
        if (!information) throw new Error("No information available to process");
        console.log("Information processed")
    }
    catch  (error) {
        console.error("Error", error.message)
    }
    finally{
        console.log("Cleanup: Closing database connection")
    }
}

processInformation();


//custom Error

function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
    //this.stack = new Error().stack;
}
// ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
    if (age < 60) {
        throw new ValidationError("Age must be 60 or older for senior citizen status")
    }
    return "You're a senior citizen";
}

try{
    const message = validateCitizen(45);
    console.log(message);
}
catch (error) {
    console.error(`${error.name}: ${error.message}`);
}


// Nullish coalescing assignment (??=)

/*
Nullish coalescing assignment (??=) assigns a value only if the variable is null or undefined.
Function:

Checks if the left side is null or undefined
If yes: assigns the right side value
If no: keeps the original value 
*/
 
let x;
let y = 10;

x ??= 20;  // x is undefined, so x becomes 20
y ??= 30; // y is already 10, so y remains 10

console.log(x) // output: 20
console.log(y) // output: 10