// [] - They're collection of element of any types
const mixedArray = [100, true, "typescript", {}];

//Index - This is the position of element in the array , it start with 0 & ends with -1

const salad = [ '🍅', '🌶️', '🥒', '🍐', '🧄', '🥕', '🧅'];

//constructor function can also be used in the creation of array , "this" , "new"(so it will create an instance) is used here in which the function name start with a capital letter
//can be define as  a regular JavaScript function used to create and initialize objects.

function Car(model){
   this.model = model
}

const bmwCar = new Car("BMW X1");
console.log(bmwCar);

const anotherSalad = new Array [ '🍅', '🌶️', '🥒', '🍐', '🧄', '🥕', '🧅'];

console.log("salad", salad);
console.log("anotherSalad", anotherSalad);

console.log(salad === anotherSalad); // Output: false

//const element = array[index];

console.log(salad[0]);
console.log(salad[4]);

//looping an array

for (let i=0; i<=salad.length - 1; i++) {
    console.log(`Element at index ${i} is ${salad[i]} `);
}

//Adding element to an array

//push() - end

const ret = salad.push('🤞');
console.log(ret); // 8
console.log(salad);

//unshift() - start

const unRet = salad.unshift('🤞');
console.log(unRet);
console.log(salad);

//Removing element from an array

//pop() - end

const popRet = salad.pop();
console.log(popRet);
console.log(salad);

//shift() -start

const shiftRet = salad.shift();
console.log(shiftRet);
console.log(salad);

//Copy & clone of array

//slice() - copy

// salad = [ '🍅', '🌶️', '🥒', '🍐', '🧄', '🥕', '🧅'];
const saladCopy = salad.slice();
console.log("Salad Before Copy", salad);
console.log("Salad After Copy", salad)
console.log( salad === saladCopy); // false

// How to determine an array in Js
Array.isArray([ '🍅', '🌶️', '🥒', '🍐', '🧄', '🥕', '🧅']); // true
Array.isArray(('🍅')); // false

// Array Destructuring

/*
const tomato = salad[0];
const carrot = salad[1];
const mushroom = salad[0];
*/
// use the below instead

// const [tomato, mushroom, carrot] = [ '🍅', '🌶️', '🥒'];
// console.log(tomato, mushroom, carrot);

// or

/*
const [tomato, mushroom = '🌶️'] = [ '🍅'];
console.log(tomato);
console.log(mushroom);
*/

//or

//If you're wishing to skip a value.
/*
const[tomato, , carrot] =  [ '🍅', '🌶️', '🥒'];
console.log(tomato); // '🍅'
console.log(carrot); //'🥒'
*/

//Nested Array

// [1, 2, [4, [6, 8, ['q']]]];

/*
let fruits =  [ '🍅', '🌶️', '🥒', '🍐', ['🧄', '🥕', '🧅']];
const veg = fruits[4]; // ['🧄', '🥕', '🧅']
const carrot = veg[2]; // '🧅'
*/

// or

// fruits[4][2]; // '🧅'

// for its destructuring

let [,,,,[,,carrot]] = [ '🍅', '🌶️', '🥒', '🍐', ['🧄', '🥕', '🧅']];

// Rest parameter & Spread operator
// Rest goes with - variables
//spread goes with - Array values

//...rest

/*
const [tomato, mushroom, ...rest] = [ '🍅', '🌶️', '🥒', '🍐', '🧄', '🥕', '🧅'];
console.log(rest); // '🥒', '🍐', '🧄', '🥕', '🧅'
*/

//...spread

const mySalad = [ '🍅', '🌶️', '🥒', '🍐', '🧄', '🥕', '🧅'];
const mySaladCopy = [...mySalad];

console.log(mySaladCopy); // '🍅', '🌶️', '🥒', '🍐', '🧄', '🥕', '🧅'

mySalad === mySaladCopy; // false

//How to swap variable & how to merge array

// swapping
 
/*
let first = '😂';
let second = '🤣';

[first, second] = [second, first];

console.log(first); // '🤣'
console.log(second); // '😂'
*/

//merging

/*
const emotions = ['🤣', '😂'];
const veggies = ['🍐', '🧄', '🥕', '🧅'];

const emotionalVeggies = [...emotions, ...veggies];

console.log(emotionalVeggies);
*/

//length

/*
const arr1 = [11, 21, 33];
const arr2 = new Array(7);
*/

//Array method in Js

//concat() -  combines two or more arrays and returns a new array without modifying the original arrays.

/*
const first = [1, 2, 3]; 
const second = [4, 5, 6];
const third = [7, 8, 9]

const merged = first.concat(second , third);
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9];
*/

// Join all the element of an array using a "Seperator"

const emotion = ['🤣', '😂', '🤣', '😂', '😊', '😊'];

const joined = emotion.join("<=>");
console.log(joined); // Output - 🤣<=>😂<=>🤣<=>😂<=>😊<=>😊

[].join // Output is "" since the array is empty

//fill() It help to fill an array at the startin value

/*
const colors = ["blue", "green", "red"];
colors.fill("pink");
console.log(colors); // Output - al will change to pink
*/

//To retain red and the other two

const colors = ["red", "green", "blue"];
colors.fill("pink" , 1 , 3);
console.log(colors); // output - only greeen and blue is change to pink here.
 
//include() - to check element present in an array, gives response as bullean

/*
const names = ["tom", "alex" , "bob" , "john"];

console.log(names.includes('tom')); // output - True
console.log(names.includes('july'));// output - false
*/

// IndexOf() - to get the position of the element in an array, it do give first index even if many

/*
const names = ["tom", "alex" , "bob" , "john", "tom"]

names.indexOf("tom"); // 0
names.indexOf('rob'); // -1 sice it is not in the array

//lastIndexOf() - gives the last index of an element in the array

names.lastIndexOf('tom'); // 4
*/

//reverse() - It reverse the position of element in an array

/*
const names = ["tom", "alex" , "bob" , "john", "tom"];

console.log(names.reverse()); // output - the array will be reverse
*/

//sort() - it sort the element in the array
//The dafault sort() method converts the element types into array
//The default sorting is ascending

/*
const names = ["tom", "alex" , "bob" , "john", "tom"]
console.log("After default sorting", names.sort());
*/

//To sort for arrangement

const artists = [
    'John white Abbott',
    'Leonardo da Vinci',
    'Çharles Aubry',
    'Anna Atkins',
    "Barent Avercamp" 
];

console.log("Default sorting of artist array", artists.sort());

//condition ? valueIfTrue : valueIfFalse
//For descending
artists.sort(function ( a,b){
    return a===b ? 0: a > b ? -1 : 1;
});

console.log("sort the artist names(Descending)", artists);

//Ascending
let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

console.log("age with default sorting", ages.sort(function(a, b){
    return a===b ? 0: a > b ? 1 : -1;
}));

//splice() - to delete element from an array , add elenent to an array and also modify element in an array

//splice(start, deleteCount, item, item1, item2);

const names = ["tom", "alex" , "bob" , "john"];
console.log(names.splice(0, 1)); // output- [tom] ( i.e in index zero you're deleting one element;

//To replace the deleted name.
console.log(names.splice(0, 1, "John")); // output - [tom] ( Because tom is the one we're deleting)

console.log(names); // Output - ["john", "alex" , "bob" , "john"];

//In the below code you're not deleting any element sice the deleteCount = 0 
//therefore, "Zack" will be added in the first index will the other three willl be pushed.

names.splice(1, 0 , "Zack"); // output - ["tom", "zack" "alex" , "bob" , "john"]
console.log(names);

//start position = 2 , deleteCount = 1;

names.splice(2, 1 , "Zack"); // Output - ["bob"]
console.log(names); //Output - ["tom", "alex" , "Zack" , "john"]
 
//at() - 
// from left to right it is positive
//from right to left  it is negative but the index is from -1 and not zero

const junkFoodILove = [ '🍅', '🌶️', '🥒', '🍐', '🧄', '🥕', '🧅'];

junkFoodILove.at(5); // ['🥕']
junkFoodILove.at(-7); // ['🍅']


// copyWithin() - 

//copyWithin(target, start, end);
//target - it is the index at which copyWithin will start to copy the element

const array = [1, 2, 3, 4, 5, 6, 7];

array.copyWithin(0, 3, 6);
console.log(array) // Output - [4, 5, 6, 4, 5, 6, 7]

const array1 = [1, 2, 3, 4, 5, 6, 7];

//There's no end here.
array1.copyWithin(0, 4);
console.log(0, 4); // [5, 6, 7, 4, 5, 6, 7]


//flat() -  flattens nested arrays by removing one or more levels of nesting
//array.flat(depth)  // depth = how many levels to flatten (default: 1)

{
    const arr1 = [0, 1, 2, [3, 4]];
    console.log(arr1.flat());

      const arr2 = [0, 1, [2, 3, [4, 5]]];
      console.log(arr2.flat(2)); // Output - level 2. To do everything use infinity
}

//Grouping 
//condition ? valueIfTrue : valueIfFalse
{
    const employees = [
    {name:"Bob", dept:"Engineering", salary: 5000 },
    {name:"Alex", dept:"HR", salary: 3000 },
    {name:"Ravi",  dept:"Engineering", salary: 7000 },
    {name:"John", dept:"Engineering", salary: 1000 },
    {name:"Tom", dept:"Sales", salary: 6000 },
];

const groupedByDept = Object.groupBy(employees, ({dept}) => dept );
console.log(groupedByDept);

const groupedByMoreThan5000 = Object.groupBy(employees, ({salary}) =>{
    return salary >= 5000 ? "More than 5k" : "Less than 5k"
})
console.log(groupedByMoreThan5000);
}

//Immutability() -  means data cannot be changed after it's created.

//toReversed() - creates a new array with elements in reverse order without changing the original array.
 
const items = [1, 2, 3];

const reversedItem = items.toReversed();

console.log(reversedItem);
console.log(items);

//toSorted
/*
{
const  months = ["Jan", "Feb", "Dec", "Aug"];
const sortedMonths = months.toSorted();

console.log(sortedMonths);
console.log(months);
}
*/


///toSplice() - 
const  months = ["Jan", "Mar", "Apr", "May"];

const months2 = months.toSplaced(1, 0, "Feb");

console.log("Original Array", months);
console.log("Spliced Array", months2); // ["Jan", "Feb", "Mar", "Apr", "May"]


//with () - used in changing element in an array
//negative position can also be used here

const numbers = [1, 2, 3, 4, 5];

//numbers[2] = 6; - The original somthing declared will be change

//with(index, value); - another one will be given without changing the original

const newsArray = numbers.with(2, 6);

console.log(numbers); // unchanged - [1, 2, 3, 4, 5]

console.log(newArray); // changed - [1, 6, 3, 4, 5]

// numbers[-2] = 8 // undefined
const anotherArray = numbers.with(-2, 8);
console.log(numbers);
console.log(anotherArray); // [1, 2, 3, 8, 5]


//Static Array

//Array like () - An array-like object looks like an array but isn't actually an array.

/*
Requirements to be array-like:

Has numbered keys (0, 1, 2...)
Has a length property
But missing array methods (push, pop, forEach, etc.)
*/

//{key: "value"} // object
//[1, 2, 3];

const arr_like = {0: 'I', 1: 'am', 2: 'array-like', length: 3};

console.log(arr_like);

arr_like[2]; // array-like;
arr_like.length // 3

console.log("is arr-like an array?", Array.isArray(arr_like)); //false

console.log("is arr-like an onject?", arr_like instanceof Object); //true

function checkArgs(){
    console.log("Array like Args", arguments);
    const argArr = [...arguments];
    console.log("Converted Array Args", argArr);
    argArr.forEach((elem) => {
        console.log(elem);
    });
}

checkArgs(1, 45);

console.log("HTML COLLection as Array like", document.getElementsByTagName('li'));
const collectionArr = Array.from(document.getElementsByTagName('li'));
console.log("Converted Array", collectionArr);


//Array.from() converts array-like objects or iterables into real arrays

//syntax
//Array.from(arrayLike, mapFunction, thisArg)

/*
const divs = document.querySelectorAll('div');
const divArray = Array.from(divs);
// Now you can use array methods like forEach, map, etc.
*/

/*
function test() {
    const args = Array.from(arguments);
    return args;
}
console.log(test(1, 2, 3));  // [1, 2, 3]
*/

//fromAsync() - converts async iterables or promises into an array asynchronously.

const collectionPromise = Array.fromAsync(document.getElementsByTagName('li'));
console.log("Converted Array", collectionPromise);

collectionPromise.then((value) => console.log(value));

const res = Array.fromAsync( {
    0: Promise.resolve('tapaScript'),
    1: Promise.resolve('Google'),
    2: Promise.resolve('Apple'),
    length: 3
}).then((value) => console.log(value))

console.log(res);

//of() - treats all arguments as array elements, regardless of type or count!

const a = new Array(2, 3, 4); // [2, 3, 4]
const b = [4, 5, 6]; // [4, 5, 6]

const c = Array.of(2, true, "test", {name: "Alex"}, [1, 2, 3]);
console.log(c);


//Array iterator method

const customers = [
  {
    "id": 1,
    "firstname": "Sarah",
    "lastname": "Johnson",
    "gender": "Female",
    "age": 28,
    "married": true,
    "expense": 1250.50,
    "purchased": ["Laptop", "Wireless Mouse", "USB Cable", "Book"]
  },
  {
    "id": 2,
    "firstname": "Michael",
    "lastname": "Davis",
    "gender": "Male",
    "age": 64,
    "married": true,
    "expense": 899.99,
    "purchased": ["Gaming Headset", "Mechanical Keyboard", "Monitor"]
  },
  {
    "id": 3,
    "firstname": "Emma",
    "lastname": "Wilson",
    "gender": "Female",
    "age": 7,
    "married": false,
    "expense": 325.75,
    "purchased": ["Smartphone Case", "Bluetooth Speaker", "Power Bank"]
  },
  {
    "id": 4,
    "firstname": "James",
    "lastname": "Brown",
    "gender": "Male",
    "age": 82,
    "married": true,
    "expense": 2150.00,
    "purchased": ["Smart TV", "Soundbar", "Streaming Device", "HDMI Cable", "Book"]
  },
  {
    "id": 5,
    "firstname": "Lisa",
    "lastname": "Martinez",
    "gender": "Female",
    "age": 3,
    "married": true,
    "expense": 675.25,
    "purchased": ["Tablet", "Stylus Pen", "Tablet Stand"]
  },
  {
    "id": 6,
    "firstname": "David",
    "lastname": "Thompson",
    "gender": "Male",
    "age": 29,
    "married": true,
    "expense": 445.80,
    "purchased": ["Fitness Tracker", "Wireless Earbuds", "Phone Charger", "Book"]
  }
];

// filter() - 

//syntax

/*
const newArray = arr_like.filter((element, index, array) => {
    //Do something here
});
*/

const seniorCustomer = customers.filter((customers) => {
    return customers.age>= 60;
})
console.log("Senior customer list", seniorCustomer);

// map() - creates a new array by transforming each element using a function you provide.

// syntax

/*
array.map((currentValue, index, array) => {
    // return transformed element
})
*/

const customerWithFullName = customers.map((customer) => {
    let title = "";

    if ( customer.gender === 'Male') {
        title = "Mr."
    } else if (customer.gender === 'F' && customer.married) {
        title = "Mrs."
    } else {
        title = 'Miss';
    }

    customer['fullname'] = `${title} ${customer.firstname} ${customer.lastname}`

    return customer;
});

console.log("Customers after adding fullname", customerWithFullName);

// reduce() - reduces an array down to a single value by running a function on each element and accumulating the results.

//syntax

arr_like.reduce(
    reducer(
        accumulator,
        currentValue,
        index,
        array
    ),
    initialValue
);
//A reducer function which is also called as callback function to be called on each element onf the array

const rets = function reducer( accumulator, currentValue, index, array) {
    //do something with accumulator and currentvalue
    //you get a result
    //you return that result
} 

//const arr = [1, 2, 3, 4, 5];

//accumulator = start from initial i.e 0

const result = arr.reduce((accumulator , currentValue) => {
    return accumulator + currentValue;
},0)

console.log(result);

// customers that purchase the item books

let count = 0;
const total = customers.reduce ((accumulator, customer) => {

if (customer.purchased.includes("Book")) {
    accumulator = accumulator + customer.age;
    count = count + 1;
}
return accumulator;
},0);

console.log('customer Avg age purchased Book:',
    Math.floor(total/count));

let number = [100, 40, 15];

    const subResult = number.reduce((accumulator, current) => {
        return accumulator - current;
    });

console.log("Subs", subResult);


// reduceRight() -  in JavaScript is similar to reduce(), but it processes the array from right to left instead of left to right.

let numb = [100, 40, 15];

    const subResults = numb.reduceRight((accumulator, current) => {
        return accumulator - current;
    });

console.log("Subs", subResults);

//some() - check if a condition is satisfy for atleast one element
 
arr.some((Element, index, array) => {
    //Do something here
});

const  hasYoungCustomers = customers.some (( customer) => {
    return customer.age < 10;
});

console.log('Has young customer (Age < 10):' , hasYoungCustomers ); // output - bullean

// every () - check if a condition satisfy for all array.

const isAllMarried = customers.every((customer) => {
   return customer.married
});

console.log("All customer Married", isAllMarried);

//find() -  returns the FIRST element that matches the condition. If nothing matches, it returns undefined.
//find() = "Give me the first one that matches" , filter() = "Give me all that match"

const foundYoungCustomer = customers.find((customer) => {
    return customer.age < 10;
});

console.log('found young customer(Age < 10)', foundYoungCustomer);

//findIndex() - Returns the index (position) of the first matching element

const youngCustomerIndex = customers.findIndex((customer) => {
    return (customer.age < 10);
});

console.log('found young customer(Age < 10)',  youngCustomerIndex);

//findLastIndex () - it find the last matching index , start the searching from the right

const lastFoundYoungCustomer = customers.findlastIndex((customer) => {
    return (customer.age < 10);
})

console.log('[find] last found customer.age < 10', lastFoundYoungCustomer);


// Array method chaining

//use Case: Get the total amount spent by married customers

//reduce()
//map
//filter()

//find all married customers

/*
const marriedCustomers = customers.filter((customer) => {
    return customer.married;
});

const expenseMapped = marriedCustomers.map((marriedCustomer) => {
    return marriedCustomer.expense;
});

const totalExpenseMarriedCustomer = expenseMapped.reduce((accum, expense) => {
    return accum + expense;
},0);

console.log(
    "Total Expense of married customers in INR",
    totalExpenseMarriedCustomer
);
*/

// or

const totalExpense = customers.filter((customer) => {
    return customer.married;
})

.map((marriedCustomer) => {
    return marriedCustomer.expense;
})

.reduce((accum, expense) => {
    return accum + expense;
},0);

console.log("Total Expense of married customers in INR", totalExpense);


//forEach() - in JavaScript is used to loop through each element of an array and run a function for each one.

//forEach() → Loops through items but doesn’t return a new array. WHILE map() → Loops through items and returns a new array with the results.

const arr = [1, 2, 3, 4, 5];

arr.forEach((elem) => {
    console.log(elem);
});

//.entries() - returns an iterator that gives you [index, value] pairs for each element in an array. 

//arr.entries() creates an iterator of [index, value] pairs., .value gets the [index, element] part from that object.

//When the iterator is finished, .next() will return:

const arrItr = arr.entries();

/*
console.log("Array Iterator", arrItr.next().value); // [0, value]
console.log("Array Iterator", arrItr.next().value); // [1, value]
*/

//or

for (const [index , element] of arrItr) {
    console.log(index, element)
}

//values() - returns an iterator that goes through the values of an array (one by one), starting from index 0 to the end.

//It returns only the value but doesn't return index

const arrItr2 = arr.values();

for(const value of arrItr2) {
    console.log(value);
}

//flatMap() - 

const arr1 = [1, 2, 3, 4, 5];

console.log("Complex map", arr1.map(item => [item *2])); // [[2], [4], [6]...]
console.log("complex flat map", arr1.flatMap(item => [item *2])); [2, 4, 6, 8];





