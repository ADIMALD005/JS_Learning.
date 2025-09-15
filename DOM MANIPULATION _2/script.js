// Creating Element

{
    /*
const pElem = document.createElement("p");
pElem.innerText = "This is a text added dynamically.";
document.body.appendChild(pElem);
// console.log(pElem);
*/
}

// Insert Elements

{
const span = document.createElement("span");
span.innerText = "I'm a span";

const pElem = document.querySelector("p");
//console.log(pElem.nextElementSibling); // the next tag i.e h2
document.body.insertBefore(span, pElem.nextElementSibling);  // document.insertBefore() - error (because here p tag have a parent of body)
}

// Modifying Content

{
    const pElem = document.querySelector("p");
    pElem.innerHTML = "<u> Hello How </u> are you doing";
    //pElem.innerText = "<u> Hello How </u> are you doing"; - the difference

    const divElem = document.querySelector("div");

    console.log("Inner Text", divElem.innerText); // Inner Text - null
    console.log("Text Content", divElem.textContent); // Text Content - text
}


// Removing Element

{
    let items = document.getElementById("myList");
    
    const itemToRemove = items.children[0];

    items.removeChild(itemToRemove);

    // To remove all list
    // items.replaceChildren() - but could take parameter if you wish to replace the list.

    document.getElementById("removeMe").remove()
}


// Read, write and Remove Attributes

{
    const imageElem = document.querySelector("img");

    console.log(imageElem.getAttribute('alt'));

    const addAnotherImage = imageElem.setAttribute("src", "acer7.jfif");
    console.log("The image attribute has been changed to:",imageElem.setAttribute("alt", "banner"));

    imageElem.removeAttribute("height");

    imageElem.hasAttribute("src");  // true
    imageElem.hasAttribute("height") // false
}

// Travarsing /Navigating DOM

{
    // parentElement and // parentNode

    const span = document.getElementById("text");

   // console.log("parent Element", span.parentElement.parentElement);
    console.log("Parent Node", span.parentNode.parentNode); 

    //children(return HTML collection(array_like) - before performing an operetion it must be firstly converted to an array) 
    // and childNodes (return nodeList - (conversion isn't needed) - and some function can be performed)

    const mainElem = document.getElementById("main-id");

    //console.log("Children", mainElem.children);
    //console.log("Child Node", mainElem.childNodes);

    //console.log("first child", mainElem.firstChild); // text
    //console.log("first Element child", mainElem.firstElementChild); // Element i.e p

    const  mainDiv = document.getElementById("Something-id2");

    console.log("next sibling", mainDiv.nextSibling);
    console.log("next Element sibling", mainDiv.nextElementSibling);
    
    console.log("previous sibling", mainDiv.previousSibling);
    console.log("previous Element sibling", mainDiv.previousElementSibling);
}

// Manipulating Style

{
    const pElem = document.getElementById("p-id");
    console.log(pElem.style);
    pElem.style.backgroundColor = "pink";
}

//Manipulating classes

{
    const mainDivElement = document.getElementById("main-id");

    // console.log(mainDivElement.className);

    // mainDivElement.className = "secondary-class";

    // console.log(mainDivElement.className);

    //or  

    console.log(mainDivElement.classList);

    mainDivElement.classList.add("test");  // - it hasn't been declared in the css

    mainDivElement.classList.remove("layout");

    mainDivElement.classList.replace("main-class", "secondary-class");

    console.log("Does it have test?", mainDivElement.classList.contains("test"));  // true

    console.log("Does it have test?", mainDivElement.classList.contains("main-class"));  // false

    // toggle - if it contains remove, if it doesn't add it

    mainDivElement.classList.toggle("test");
    mainDivElement.classList.toggle("test");
}

// controlling Visibilities - it can be control usin style attribute

{
    const mainDivElement = document.getElementById("main-id");
    //mainDivElement.style.display = "block";
    
    //mainDivElement.style.visibility = "hidden";

    mainDivElement.style.opacity = "0.5"; // another way to control visibility
}



// mini-project - toggle paragraph

function toggleInfo() {
    //console.log("Toggling");

    const para = document.getElementById("myParagraph");
    para.classList.toggle("hidden");
}



// bigger project

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value;
    if (task.trim === "") return;

    const li = document.createElement("li");

    li.innerText = task;

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.style.marginLeft = "5px"
    completeBtn.onclick = function() {
        li.classList.toggle("complete");
    }
    li.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "5px"
    deleteBtn.onclick = function() {
        li.remove();
    }

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

// search task
// edit task  DIY
function filterTask() {

}