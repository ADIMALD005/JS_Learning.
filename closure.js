// A closure is a function that can access a variable from it outer functure or a variable scope
// even the outer function execution has been done.
function outer() {
    let x =10;

    return function inner() {
        console.log(x);
    }

}

const func = outer();
console.log(func()); // 10


function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count);
    }
}

const retVal = outerCount();

retVal(); // 1
retVal(); // 2

// Real World Example

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return{
        deposit: (amount) => {
          balance = balance + amount;
          console.log("Deposited", amount, "current Balance", balance);
       },

       withdraw: (amount) => {
         if(amount > balance) {
            console.warn("Insufficient Fund");
        }
        else{
            balance = balance - amount;
            console.log("Withdrawn", amount, "current balance", balance);
        }
       },

        checkBalance: () => console.log("current balance", balance)
   };
}

const tapaScriptAccount = createBankAccount(100);

console.log(tapaScriptAccount);

console.log(tapaScriptAccount.checkBalance()); // 100
console.log(tapaScriptAccount.withdraw(200)); // Insufficient fund
console.log(tapaScriptAccount.deposit(900)); // Deposit = 900 current balance = 1000
console.log(tapaScriptAccount.withdraw(300)); // 700
console.log(tapaScriptAccount.checkBalance()); // 700

// Usefullness of closure

// 1. You can keep the variable private without exposing them
// 2. you can stop variable pollution
// 3. You an create a function factory
// 4. You can keep a variable alive between multiple calls

function timer() {

    return function() {
        secs++;
        console.log("elapsed seconds", secs);
    }
}

const timerInstance = timer();
timerInstance(); // 1
timerInstance(); // 2