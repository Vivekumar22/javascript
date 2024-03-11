let score = "12abc"

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0
 
let isLoggedIn = "vivek"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "vivek" => true



// **************************** Operations ******************************************

let value = 3
let negvalue = -value
//console.log(negvalue);

console.log("1" +2);
console.log(1 +"2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

let a = 2;
let b = ++a;
console.log(a);
console.log(b);