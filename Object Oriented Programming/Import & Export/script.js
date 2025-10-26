console.log("Learning modules......");
/* 
//import {sum , sub} from './calc.js';
console.log(sum(2,3));
console.log(sub(2,3)); */

//import {default as myChannelName} from './whoami.js';
//console.log(myChannelName());

/* 
// Aliases
//import { sum as add, sub as minus} from './calc.js'
console.log(add(2,3));
console.log(minus(2,3)); */

/* 
// name space
import * as calc from './calc.js';
console.log(calc.sum(3,4));
console.log(calc.sub(5,4)); */

/* 
// Combine Export - when you need two or modules to work at a time
import * as combine from './combine.js';
console.log(combine.calc.sum(5,4)); 
console.log(combine.channelName()); */
 
// Dynamic import - It's used to care of App performance and loading thing.
const {sayHi, sayHola} = await import ("./greeting.js");

const promises = Promise.all(
    [
        await import('./greeting.js'),
        await import('./calc.js')
    ]
);
//console.log(promises);

promises.then(result => {
    console.log(result);
    console.log(result[1].sum(6,7));
});

