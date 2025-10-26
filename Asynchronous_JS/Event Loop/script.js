// JavaScript is Synchronous
// There can be async behaviours
      // - With Browser APIs/Web API - setTimeout, setInterval
      // - With Promises
      // - With Event Handlers

// Event Loop
      // - Call Stack
      // - Web APIs
      // - Callback Queue:
      // - MicroTask Queue/Job Queue:
      // - Event Loop:

 function f1() {
    console.log("F1");
 } 

 function main() {
      setTimeout(() => {
            console.log("Inside setTimeout");
      }, 5000)
      f1();
 }
 main();

 function f1() {
    console.log("F1");
 } 

 function f2() {
    console.log("F2");
 } 

 function main() {
      console.log("main");
      setTimeout(f1, 0);
      new Promise((resolve, reject) => {
            resolve("I'm a promise");
      }).then((resolve) => console.log(resolve));
      f2();
 }
 main();