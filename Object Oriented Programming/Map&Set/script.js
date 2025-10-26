// Map in JS - It's a key Pair of Object
// Differences Btwm Object / Map
// 1. Key can be of any type
// 2. Map remembers the original order in which the elements were added to it but Object doesn't

/* 
const map = new Map([
['name', 'tapaScript'],
['type', 'YT'],
['Owner', 'tapas']
]);
console.log(map); */

// How to Add Value to a Map
// set(Key, value)

// create a map
/* 
const map = new Map();
map.set("name", "tapaScript");
map.set("type", "YT");
map.set("owner", "tapas");

console.log(map);
 */

// How to Get values from a map
// get(key)
//console.log("Type is", map.get('type'));

// Map keys
/* 
const funMap = new Map();

funMap.set(560, "My House Number");
funMap.set(true, "Yes, I love teaching");

let obj = {'name': 'tapas'};
funMap.set(obj, true);

console.log(funMap);
 */

// Create an empty object
/* 
const funObj = {};

funObj[560] = "My House number";

console.log(funObj[560] === funObj['560']); // true
console.log(funMap.get(560) === funMap.get("560"));  // false
 */

// Map  properties and 
/* 
console.log(funMap.size); // 3
console.log(funMap.has(560)); // true
console.log(funMap.has("560")); // false
console.log(funMap.has(360)); // false
 */

// To Delete an Element
/* 
funMap.delete(560);
console.log(funMap);
 */
// To clear all
/* 
funMap.clear();
console.log(funMap);
 */

// MapIterator: Keys(), values(), and entries()
/* 
const ageMap = new Map([
    ['Jack', 20],
    ['Alan', 34],
    ['Bill', 10],
    ['Sam', 9]
]);
 */

// Get all the keys
//console.log(ageMap.keys());

/* 
const mitr = ageMap.keys();
mitr.forEach((item) => {
    console.log(item);
})
console.log(ageMap.values());
console.log(ageMap.entries);
 */

/* 
ageMap.forEach((value, key) => {
    console.log(`${key} is ${value} years old`)
});
 
// OR

for(const [key, value] of ageMap) {
    console.log(`${key} is ${value} years old`)
}
 */

// Convert an object into a Map
/* 
const address = {
    'Tapas': 'Banglore',
    'James': 'Huston',
    'Selva': 'Srilanka'
};
const addressMap = new Map( Object.entries(address));
console.log(addressMap);
 */

// Convert a Map into an Object
/* 
const addre = Object.fromEntries(addressMap);
console.log(addre); */

// Convert a Map into an Array
/* 
const map = new Map();
    map.set('milk', 200);
    map.set('tea', 300);
    map.set('çofee', 500);

    console.log(Array.from(map));  
    // OR
    console.log(...map);
 */

// Set in JS
// A Set is a collection of unique elements
/* 
const set = new Set();
 
const fruitSet = new Set(['🍅','🍎','🍓','🍒']);
console.log(fruitSet);
 */
//console.log(fruitSet.size); // 4

/*
const saladSet = new Set();

saladSet.add('🍅'); // Strawberry
saladSet.add('🍉'); // watermelon
saladSet.add('🍌'); // banana
saladSet.add('🍊'); // orange

console.log(saladSet);
*/

//console.log('Does the salad have a carrot?', saladSet.has('🍉')) // true

// How to Iterate Over  set
/* 
 const houseNos = new Set([360, 567, 101]);
 houseNos.values(); // SetIterator */

 // How to convert a set into an array
/* 
 const houseNoArr = [...houseNos];
 console.log(houseNoArr);

 const mixeedFruit = ['🍅','🍎','🍓','🍒', '🍅','🍎','🍓','🍒']
 const mixeedFruitSet = new Set(mixeedFruit);
 console.log(mixeedFruitSet); // NB: The duplicate won't be added because a set doesn't duplicate */

 // Create a person Object
/* 
 let person = {
    'name': 'Alex',
    'age': 32
 };

 // create a set and add object to it
 const pSet = new Set();
 pSet.add(person);
 console.log(pSet);

 //person.name = "Bob"; // Name changed

 person = {};
 pSet.add(person); */

 // Set Theories
/* 
const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]); */

// Union
//console.log(first.union(second));  // OR
/* 
const union = new Set([...first, ...second]);
console.log(union); */

// Intersection
//console.log(first.intersection(second)); // OR
/* 
const intersection = new Set([...first].filter(elem => second.has(elem)));
console.log(intersection); */

// Difference
//console.log(first.difference(second));
/* 
const difference = new Set([...first].filter(elem => !second.has(elem)));
console.log(intersection); */
/* 
const numbers = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const the4Table = new Set([4, 8, 12, 16]);
console.log(numbers.isSupersetOf(the4Table)); // true */

// WeakMap
// The key of a weakMap can also be an object
// It only suppose set, get, has, delete

/* 
let user = {'name': 'tapaScript'};
// const allUsers = [user];

const uMap = new Map();
uMap.set(user, true);

user = null;
console.log(uMap)


let addr = {"country": "India"}

const wMap = new WeakMap()
    wMap.set(addr, true);
addr = null;
console.log(wMap); */

const metadata = new WeakMap();

function setMetadata(el, info) {
    metadata.set(el, info);
}

function getMetadata(el) {
    return metadata.get(el);
}

const div = document.createElement('div');
setMetadata(div, {visible: true});

console.log(getMetadata(div));  // {visible: true}


// WeakSet - It keeps memory usage very temporarily
// Also used for tracking or caching object without affecting their lifecycles
// only has method like add, has, delete

const onlineUsers = new WeakSet();

let user1 = {name: "Alice"};
let user2 = {name: "Bob"};

onlineUsers.add(user1);
onlineUsers.add(user2);
console.log(onlineUsers.has(user1));

user1 = null;
console.log(onlineUsers.has(user1));