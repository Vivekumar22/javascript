/*
kaise hum data ko memory mein rakhte aur access krte hai based on that 2 types :

1. Primitive (change in copy version not in original if u change )
    - 7 types : String , Number , Boolean , null , symbol , undefined , BigInt

    


2. Non -Primitive (Refrence type)

    - Array , Objects , Functions 

    - javascript is dynamically typed language can change value at run time

*/

//primitive 
    const score = 100
    const scoreValue = 100.3

    const isLoggedIn = false
    const outSideTemp = null
    let userEmail;

    const id = Symbol('123') // to determine uniquely
    const anotherId = Symbol('123')
    console.log(id === anotherId);

    const bigNumber = 3434434487587484456478397543
    console.log(bigNumber);

    // 2  Non-Primitive (Reference)

    const heros = ["shaktiman" , "iron man" , "doga"]
    let myObj = {
        name : "vivek",
        age : 22,
    }

    const myFunction = function(){
        console.log("Hello World");
    }
    console.log(typeof myFunction);
    console.log(myFunction());

    /*typeof

    undefined : undefined
    null : object
    NUmber , boolean , strig , function  => giving same

    */

