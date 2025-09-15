console.log("Event Bubbling, Capturing and Delegation");

// In event bubbling, the event starts from the target element and bubbles up through its ancestors

// THe flow is: Child - parent - grandparent - Document


// Bubbling

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("child clicked");
});


// Capturing  - true must be pass

// In event capturing, the event flows from the outmost ancestor down to the target
// element. It happens before the actual target handles the event


document.getElementById("grandparent").addEventListener("click", 
    () => {
    console.log("captured at grandparent");
}, 
true // capture phase
);

document.getElementById("parent").addEventListener("click",
    () => {
    console.log("captured at parent");
}, true); // capture phase

document.getElementById("child").addEventListener("click", () => {
    console.log("captured at child");
}, true); // capture phase


// Event Delegation - It is a technique where you add a single event listener
// to a parent element, instead of adding individual event listeners to all its children


document.getElementById("itemList").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`);
    }
});

 
// event stop propagation - stop execution

document.getElementById("father").addEventListener("click", (e) => {
    console.log("parent clicked");
});

document.getElementById("son").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("child clicked");
});
