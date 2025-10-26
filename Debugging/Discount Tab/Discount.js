/* function calculateDiscount(total){
    let discount = 0;

    if (total >= 100) {
        discount = 0.1;
    } else if (total >= 300) {
        discount = 0.15;
    } 
    else if(total >= 500) {
        discount = 0.2;
    }
    return total - (total * discount);
} */

// Test Cases
console.log(calculateDiscount(50)); // Expected: 50 (no discount)
console.log(calculateDiscount(150)); // Expected: 135
console.log(calculateDiscount(350)); // Expected: 297.5
console.log(calculateDiscount(600)); // Expected: 480


// Correct form
/* 
function calculateDiscount(total){
    let discount = 0;

    if (total >= 500) {
        discount = 0.2;
    } else if (total >= 300) {
        discount = 0.15;
    } 
    else if(total >= 100) {
        discount = 0.1;
    }
    return total - (total * discount);
} */
// NB: If "Else If" is to be used, it must start from a bigger condition to smaller


// Closure Confusion Problem
