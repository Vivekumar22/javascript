// Immediately Invoked Function Expressions (IIFE) : (function)();
// if we write 2 iife then use semicolon(;)

(function chai(){     
    // call named iife  
    console.log(`DB CONNECTED`);        // global scope ka pollution se bachane ke liye yeh use krte hai (function)();
}) ();


// Arrow function 
( () => {
    console.log(`DB CONNECTED TWO`);
} ) ();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ("vivek");



