//Temporal Dead Zone(TDZ)

//TDZ = an area where you can not access a variable until it is initialized

//ReferenceError

{
    // === name variable's TDZ started here

   console.log(name); // ReferenceError

   
   let name = "tapaScript"     // === name variable's TDZ ends here
}

//function Hoisting

//Invoke a function, chase()

chase();

//Declare a function, chase()

function chase() {
    console.log('Tom chases Jerry');
    // Invoke a function, caught();
    caught();
}

//Declare a function, caught()

function caught() {
    console.log('Tom caught Jerry');
}

// Note - test isn't a function , but function is passed as a value;

test();

var test = function() {
    console,log('I am not a function')
}
