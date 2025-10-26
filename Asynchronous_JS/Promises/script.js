// How to create promise.
// constructor function - functions that take callback as an argument

let promises = new Promise(function(resolve, reject){

});

// Executor

// resolve and reject - are the function given by JS to us, they're the callback function that
// will be called in the execution function whether the promise has resolve or being rejected

// function(resolve, reject) {
//     // logic goes here
//     resolve();
//     reject();
//     resolve();
// }

/*
state -  {
    pending: Initially when the executor function starts the execution
    fufilled: When the promise is resolved
    rejected: When the promise is rejected
}
*/  

/*
result - {
    undefined: initially ehen the state of value is pending
    value: when the resolve(value) is called
    error: When reject(error) is called.
}
*/

// - How promises are resolved and rejected

let promise1 = new Promise(function(resolve, reject) {
    resolve("Hey, I'm done!");
});

let promise2 = new Promise(function(resolve, reject) {
    reject("Something is not right!");
});

let anotherPromis = new Promise(function(resolve, reject) {
    resolve("I'm surely going to get resolved!");

    reject(new Error("Will this be ignored")); // ignored

    resolve("Ignored"); // ignored
});


// - Handling promises

// .then() - They're usually used to handle a resolve result

// .catch()

// .finaly()

let loading = false; 
const promise = new Promise(function(resolve, reject) {
    loading = true;
    // Make a Network call(API call/ IO operation)
    resolve("I am resolved...") 
});

promise.then(
    (result) => {console.log(result)},
).catch(
    (error) => {console.error(error)}
).finally(
   () => {
      loading = false;
   }
);

// - Promise Chain

// Rule 1: Every promise gives you a  .then() handler method. Every rejected promise
//provides you a .catch() handler.

// Rule 2: You can do mainly three valuable things from the .then() method.
// You can return another promise(for async operation). You can return any other value 
// from a synchronous operation. lastly, you can throw an error

// create a promise

let getUser = new Promise(function(resolve, reject) {
    const user = {
        name: 'John Doe',
        email: 'jdoe@email.com',
        password: 'jdoe.password',
        Permissions: ['db', 'dev']
    };
    resolve(user);
});

getUser.then(function(user) {
    console.log(`Got user ${user.name}`);

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Banglore')
        }, 2000)
    })
})
.then((address) => {
    console.log(`User address is ${address}`)
})

// Return a simple value from the .then() handler

getUser
.then(function(user) {
    console.log(`Got user ${user.name}`);
    return user.email;
})
.then(function(email) {
    console.log(`User email is ${email}`);
});

// Throw an error from the .then() handler

getUser
.then((user) => {
    console.log(`Got user ${user.name}`);

    if (!user.Permissions.includes("hr")) {
        throw new Error("You're not allow to acccess the HR module")
    }
    return user.email;
})
.catch((error) => {
    console.error(error);
});

// Rule 3: You can rethrow from the .catch() handler to handle the error later,
//In this case, the control will go to the net closest .catch() handler.

let promise401 =  new Promise(function(resolve, reject) {
    reject(401);
});

promise401
.catch((error) => {
    console.log(error);

    if (error === 401) {
        console.log("Rethrowing 401");
        throw error;
    } else {
        // Do something
    }
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(`handling ${error} here`);
});

// Rule 4: unlike .then() and .catch(), the .finally() handler doesn't process the result
// value or error. It just passes the result as is to the next handler

// create a promise

let promiseFinally = new Promise(function(resolve, reject) {
    resolve('Testing Finally');
});

promiseFinally
.finally(function() {
    console.log("Running Finallty");
})
.then(function(result) {
    console.log(result);
})

// Rule 5: calling the .then() handler mmethod multiple times on a single promise
// is NOT chaining

promise
.then((result) => {
    // Do something
    return 101;
})
.then((result) => {
    // result // 101
    // throw error
})
.catch((error) => {

})

// Create a promise

let promised = new Promise(function(resolve, reject) {
    resolve(10);
});

//calling the .then() method multiple times on a single promise - It's not a chain

/*
promised.then(function(value) {
    value++;
    return value;
});
promised.then(function(value) {
    value = value + 10;
    return value;
});
promised.then(function(value) {
    value = value + 20;
    console.log(value);
    return value;
});
*/

promised.then(function(value) {
    value++;
    return value;
})
.then(function(value) {
    value = value + 10;
    return value;
})
.then(function(value) {
    value = value + 20;
    console.log(value);
    return value;
});


// Handle multiple promises

// promise.all([promises]) - (it wait for all promises to be resolved)take array of promises as input

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

Promise.all([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});

// promise.any([promises]) - (it wait for any promise to be resolve not all) 

Promise.any([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});


// settling a promise = fulfilling(resolve) + rejecting

Promise.allSettled([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});


// .race() - it's the quickest one that got resolved

Promise.race([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error)=> {
    console.error(error);
})

/*
Promise.resolve() is same as
let promise = new Promise(resolve);

Promise.reject()
let promise = new Promise((resolve, reject) => reject(error));
*/


// How to cancel a promise
// NB: promise cannot be cancelled but it's the process that return the promise that can be cancelled

 