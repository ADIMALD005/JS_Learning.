// An Event is just a signal that something happened in the browser

function handleClick(greeting) {
    console.log(`Button Clicked with a ${greeting}`)
}

let myBtn2Elem = document.getElementById("myBtn2");

myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked");
}

myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked Again");  // this one will override the first one
}


myBtn2Elem.onclick = () => { handleClick("Hola")}; // the bracket must not be added so it won't work as a function since we need it as a reference


//addEventListener() and removeEventListener()

const countBtnElem = document.getElementById("countBtn");

let counter = 0;

const handleCount = function() {
    console.log("counter", counter);
    counter++;
}

const greetMe = function() {
    console.log("greet me!!!")
}

countBtnElem.addEventListener("click", handleClick);
countBtnElem.addEventListener("click", greetMe); // both will surely be passed out

countBtnElem.removeEventListener("click", handleClick);


// DOM Content Loaded

// will never run

document.onDOMContentLoaded = function() {
    console.log("DOM Content Loaded...")
}

// this will run

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded....")
});


//Object Event

// event are passed to the event object to automatically handle the functions and provide
//  information about the event that occur

const searchElem = document.getElementById("search-id");

function handleChange(event) {
    console.log("Target:", event.target);
    console.log("Target Name:", event.target.name);
    console.log("Target Value:", event.target.value);
    console.log("Target Type:", event.type);
    console.log(" Current Target:", event.currentTarget);

    console.log(this)
}

searchElem.addEventListener("change", handleChange);

// In event handler the value of this is always the value of element itself on which we have added the listener



