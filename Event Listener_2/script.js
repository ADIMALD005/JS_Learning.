
console.log("Day 20 - DOM Advanced Tips");

// Efficient DOM traversal

const parent = document.querySelector('.card');
const firstChild = parent.firstElementChild;
const next = firstChild.nextElementSibling;
const lastChild = parent.lastElementChild;
const parentOfElement = firstChild.parentElement;


// Templates and Cloning

/*
const template = document.getElementById('card-template');
const clone = template.cloneNode(true);
clone.querySelector('.title').textContent = "DOM Advance Topic";
clone.querySelector('.desc').textContent = "Hope you're learning something new";

document.body.appendChild(clone);
*/  // - error in console

// Document Frangment and Range.

// Document Fragent
//- Not part of the main DOM tree until you insert it
//- Acts like a temp container
//- Great for building chunks of DOM before adding them.


const Fragment = document.createDocumentFragment();

for(let i = 0; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    Fragment.appendChild(li);
} 

document.getElementById("list").appendChild(Fragment);


// Range - represent a fragment of a document i.e two boundary point

const p = document.getElementById('para');

const range = document.createRange();

range.setStart(p.firstChild, 6); // After "Hello "
range.setEnd(p.childNodes[2], 4);

const content = range.cloneContents();

console.log(content);


// shadow DOM
document.querySelector('.card').innerHTML

// shadow host

const shadowHost = document.querySelector('#box');

const shadow = shadowHost.attachShadow({mode: 'open'}); // you might close it,
//  if you dont want external programmer to have access to it through DOM

shadow.innerHTML = `<style> p { color: red} </style><p>Hello shadow!</p>`;



//Advanced Class Manipulation

const btn = document.querySelector('.btn');
btn.classList.add('active');
btn.classList.remove('disabled');
btn.classList.toggle('visible');
btn.classList.replace('error', 'success');


// Handling large-Scale DOM Updates

function addItems(count) {
    const frag = document.createDocumentFragment();
    for (let i=0; i<count; i++) {
        const div = document.createElement('div');
        div.textContent = `Item ${i}`;
        frag.appendChild(div);
    }
    document.body.appendChild(frag);
}

addItems(1000);


// Mutation Observer - it is abuilt in JavaScript API that let you observe changes
// to a DOM element and sub tree, and made you to react to it by a callBack function

// const observer = new MutationObserver(callback);
// observer.observe(targetNode, config);

const target = document.getElementById('watchMe');

const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        console.log(`Type of mutation: ${mutation.type}`);

        if(mutation.type === 'childList') {
            console.log('A child node was added or removed');
        }

        if(mutation.type === 'attributes') {
            console.log(`Attribute ${mutation.attributeName} was changed`);
        }

        if(mutation.type === 'characterData') {
            console.log(`Text content changed to: ${mutation.target.data}`);
        }
    }
});

const config = {
    subtree: true,
    CharacterData: true,
    childList: true,
    attributes: true,
}

observer.observe(target, config);

function changeDOM() {
    target.textContent = "Goodbye!";
    target.setAttribute("data-status", "Changed");
}