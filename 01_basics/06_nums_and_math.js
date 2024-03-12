
//numbers
const score =400
console.log(score);

const balence = new Number(100.8978)
console.log(balence);

console.log(balence.toString()); // convert to string
console.log(balence.toFixed(2)); // after decimal how much digit u want

const otherNumber = 23.5665
console.log(otherNumber.toPrecision(3)); //giving only upto given digit

const hundreds = 100000000000
console.log(hundreds.toLocaleString('en-IN')); // separte with comma

//++++++++++++++++++++++++++++++++ Maths  ++++++++++++++++++++++++++++++++  
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.5));
console.log(Math.min(4,5,3,2,56));
console.log(Math.max(4,5,3,2,56));

console.log(Math.random()); // value come to 0-1
console.log( (Math.random()*10) + 1); //we can change range also

const max = 20
const min = 10
console.log( Math.floor ( Math.random() * ( max - min + 1) ) + min );



