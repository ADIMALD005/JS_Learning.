// loop - Do something repeatedly

//For loop
//"A For loop is best when we know exactly how many times we need to ruun a code"

/*
for (initialization; Condition; update) {
    //code
}
*/

for (let count = 1; count <= 5; count++) {
    console.log("Iteration/loop", count);
}

//addition of even numbers from 1 -100

let addition = 0 ;

for(let i = 0 ;  i <= 100; i += 2) {
    if(i % 2 === 0){
        addition +=i;
    }
}
console.log( "addition is:", addition);

//Nested loop

for(let i = 1 ; i <= 3; i++) {
    for( let j = 1; j <= 3; j++) {
        console.log("Row", i , "Column", j);
    }
}

//Break and Continue

// Break statement immediately exits (stops) a loop when a certain condition is met.

for ( let i = 1; i <= 5; i++) {
    if(i===3) break;
    console.log(i);
}

// continue ( i.e skipping)

for (let i = 1; i <= 5; i++) {
    if(i === 3) continue;
    console.log(i);
}

// multiple counter for single loop

for(let i=1 , j=10; i<=10 && j>=1; i++, j--) {
    console.log(i,j);
} 

// printing a pyramid

for ( let i=1; i<=10; i++){
    if(i === 2) break;
    console.log(i);

    for( let i=1 , j=2; i<=10 && j<=10; i++, j++){
        if(i === 2 && j===3) break; 
        console.log(i,j);

        for( let i=1 , j=2, k=3; i<=10 && j<=10 && k<=10; i++, j++,k++){
        if(i === 2 && j ===3 && k===4) break; 
        console.log(i,j,k);

        for( let i=1, j=2, k=3, l=4; i<=10 && j<=10 && k<=10 && l<=10; i++, j++, k++ , l++) {
        if(i === 2 && j ===3 && k===4  && l==5) break; 
        console.log(i,j,k,l);

         for( let i=1, j=2, k=3, l=4, m=5; i<=10 && j<=10 && k<=10 && l<=10 && m<=10; i++, j++, k++ , l++, m++) {
        if(i === 2 && j ===3 && k===4  && l==5) break; 
        console.log(i,j,k,l,m);
        }
        }
    }
    }
}

//While loop
// "A while loop runs as long as a given condition is true. It's best when we dont
// know in advance how many iteration are needed"

/*
while(condition) {
    // code
} 
*/

let counter = 1;

while(counter <=5) {
    console.log(counter);
    counter++
}

//do-while loop
  // "A do-while loop ensures that the code executes at least once before checking the codition"
/*
do {
    // code
} while(condition)

*/
let num = 1;

do{
    console.log(num);
    num++
}while(num <= 5)

// Infinite loop
   
