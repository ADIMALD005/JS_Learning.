// 1. Document Object Manipulation
// 2. Node - A generic term for any item in the DOM tree. Element Node, Text Node, Attribute Node.
// 3. Element - A specific type of node that represent HTML tags/elements
// 4. NodeList - An array of Nodes
// 5. Attr - represents the attribute of a node
    // <img src = "/" alt = "some image" />
// 6. NameNodeMap - A collection of Attr

// Accessing DOM 

// By id
let titleElem = document.getElementById("heading");
console.log(titleElem);

// By class

let infoElem = document.getElementsByClassName("info"); // (will return html collection)
console.log(infoElem); // array_like
console.log(infoElem[0], infoElem[1]);

[...infoElem].forEach((elem) => {  // To iterate on each of the classes
    console.log(elem);
})

// By tag name

let pTagElem = document.getElementsByTagName("p");
console.log(pTagElem);

// Selectors - Query_selector and Query_Selectot All(this returns a NodeList)

// query selector(css selector)

let para = document.querySelector("p.info");
console.log("using query selector", para);

// Query selector All(css selector)

let paras = document.querySelectorAll("p.info");
console.log("Using query selector all", paras);

let hOne = document.querySelector("#heading");
console.log("using query selector", hOne);


// Mini Project - Highlighter App

function highlightText() {
    console.log("About to highlight a text...");

    let change = document.querySelectorAll("p.info");

    change.forEach((element) => {
        element.style.backgroundColor = "yellow";
    })
}

function filterList() {
    const inputElem = document.getElementById("searchInput");
    const input = inputElem.value;

    const items = document.querySelectorAll("ul#itemList li");

    items.forEach((item) => {
        item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
    })
}



