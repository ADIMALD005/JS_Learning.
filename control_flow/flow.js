// If and Else statement

// NB: If we have single if and single else, ternary operator(?)is used

let catchingBus = false;

if (catchingBus) {
    console.log("I will Reach home on time");
} else {
    console.log("I will be late to reach");
}

catchingBus ? console.log("I will Reach home on time") :  console.log("I will be late to reach")

// Switch and Case
// As soon as condition is satisfied break must be introduced

//let position = 1;
//let position = 4;
let position = 10; // sice position doesn't match default is introduced

switch (position) {
case 1: 
    console.log("Print 1"); // if position is set to one, this will be print out
    break;
case 2: 
    console.log("Print 2");
    break;
case 3: 
    console.log("Print 3");
    break;
case 4: 
    console.log("Print 4"); // if position is set to four, this will be print out
    break;

default:
    console.log("Nothing is Matched");
}

let name = "Google"

switch(name) {
    case "tapaScript":
        console.log("Teaching 40 days of JS");
        break;
    case "goggle":
        console.log("Giving answer to all searches");
        break;
    default:
        console.log("You are neither google, nor tapaSCript")
}

const city = "Banglapore";
switch (city) {
    case "Banglapore":
    case "Kolkata":
    case "Agra":
    case "Jaipur":
       console.log("All these are in India");
       break;
    case "New York":
    default:
        console.log("It is in USA");
}