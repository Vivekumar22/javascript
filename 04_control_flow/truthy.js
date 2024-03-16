// 

// const userEmail = "V@vivek.ai"

// if(userEmail){
//     console.log("Got the user email");
// }else{
//     console.log("don't have user email");
// }

/* 

falsy values and truthy values
 false, 0, -0, BigInt 0n, "", null, undefined, NaN


 truthy values
 "0", 'false', " ", [], {}, function(){}, 

*/

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }





// Nullish Coalescing Operator (??) : null undefined : it basically designed for database bcoz sometime db return 2 value and may be 1 value is null so that null nhi aaye isliye
// Assigning the first value if not null and undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)



// Ternary Operator

//condition ? true : false

const iceTesPrice = 100
iceTesPrice <=80 ? console.log("less than 80") : console.log("more than 80");
