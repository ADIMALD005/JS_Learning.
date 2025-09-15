let user = {
    name: "tapas",
    age: 40,
    "is admin": true
};

console.log(user.name); // "tapas"
console.log(user.age); // 40

user.isSeniorCitizen = false;
user["movie lover"] = true;

console.log(user);

console.log(user["is admin"]);


// to delete

// delete user["movie lover"];
// delete user.age;
// console.log(user)


// To retrieve
const someKey = "age";
console.log(user[someKey]); // 34


// To construct object whose key is dynamically computed

/*
let car = prompt("Which is your fav car?");

let favCars = {
    [car]: 5 
}
console.log(favCars);
*/

// constructor function

function Car(name, model) {
    this.name = name;
    this.model = model
}

const bmwCar =  new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8")
console.log(bmwCar);
console.log(audiCar);

console.log(bmwCar instanceof Car);


const person = new Object();
person.name = "Alpha";
person.age = 78;
console.log(person);


function createUser(name, age) {
    return{
        name,
        age,
        greet() {
            console.log(this.name);
        }
    }
}

const user1 = createUser("tapas", 39);
console.log(user1);
user1.greet();

const user2 = createUser("bob", 32);
console.log(user2);


let profile = {
    name: "tapas",
    company: "CreoWis",
    message: function() {
        console.log(`${this.name} works at ${this.company}`); // this.name = "tapas"
    },
    address: {
        city: "Bangalore",
        pin: 56032,
        state: "Karnataka",
        country: "India",
        greeting: function() {
            cconsole.log("Welcome to India");
        }
    },
    salary: $5000
}

console.log(profile.salary);


console.log(profile.name); // "tapas"
profile.address.greeting();
console.log(profile.company); // "CreoWis"

profile.message();

// in operator - it is also used to check a prticular properties in an object

console.log("salary" in profile);


// for...in - It is used to walk through all properties in an object

for (let key in profile) {
    console.log(key)
    console.log(profile[key]);
}

// .keys() - it is used to get all keys in an object in form of array

console.log(Object.keys(profile)); // all keys in profile


//object Reference

const fruit = {name: "mango"}; // XA01
const oneMoreFruit = {name: "mango"} // YB02

// They might have same value but the memory storeage is different

console.log(fruit === oneMoreFruit); // false
console.log(fruit == oneMoreFruit); // false

fruit = oneMoreFruit; // = means they are pointing to the same location in the memory i.e they're pointing to the same object/Reference

console.log(fruit = oneMoreFruit);

// Static Methods

// .assign() - they copys all other object owns properties from a source to a target object
const target = {p:1, q:2};
const source = {a:3, b:3};

const returnObj = Object.assign(target, source);
console.log(returnObj); //{p:1, q:2, a:3, b:3}

const obj = {name: "tapaScript"};
const obj2 = Object.assign({}, obj);
console.log(obj2)

// cloning/nested in assign

const obj3 = {
    a: 1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1,  b: {c: 2}}
obj4.b.c = 3;

obj4.a = 100;

console.log(obj4.a); // 100
console.log(obj3.a); // 1

console.log(obj4.b.c) // 3
console.log(obj3.b.c) // 3  // They value her are the same because they are nested function and both will be the same 

// instead of using deepClone for the above just use structureClone

const obj5 = Object.structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c); // 30
console.log(obj3.b.c); // 2


//.entries() - used in transforming objec  to an array

const myObj = {
    a: "tapas",
    b: 32,
};

const myArr = Object.entries(myObj);
console.log(myArr);

// its opposite - i.e to transform back to object

const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
Object.objEntries =  Object.fromEntries(entries);
console.log(fromEntries);


// .freeze() - it give immutability i.e it can't be change (cannot be changed at all)

const emp = {
    sal: 100
}

Object.freeze(emp);

emp.salary = 200; // can't be added

console.log(emp);

console.log(Object.isFrozen(emp)); // true


//seal() - it give immutability (but can be modified  i.e a new value can be re-assign)
 
const dept = {
    name: "finance"
}
Object.seal(dept);

dept.address = "Bangalore" // can't be added
delete dept.name // can't be deleted

dept.name = "HR"
console.log(dept); // "HR"

Object.log(Object.hasOwn(dept, "name")); // true
