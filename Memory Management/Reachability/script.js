// Reachabilty
let gb = 10;
function someFunnc() {
    let a;
    someOtherFunction()
    return a + 30;
}

function someOtherFunction() {
    let c = {};
}

let employee = {salary: 10000};
employee = null;


// Cyclic reference

function createCycle(objA, objB) {
    objA.ref = objB // objA references objB
    objB.ref = objA // objB references objA

    return {
        "A": objA,
        "B": objB
    }
}
const cycle = createCycle({sal: 100}, {sal: 200});
console.log(cycle);

const dept = {
    name: "finance"
}
const department = dept;