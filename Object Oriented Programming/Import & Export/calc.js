// Named export - it requires exporting out with a 
// name and also importing to another module with that name.

// Aliases - It is used when exporting and importing two thing of the same name

export const sum = (a,b) => {
    return a + b;
}

export const sub = (a,b) => {
    return a - b;
}  
// OR

// export{sum , sub}

/// name space - It is used when you have multiple thing to export
