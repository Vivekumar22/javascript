const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    order: function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// we can also make the properties like pi for our object

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false
}) // ab name ko iterate nhi kr skte
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`);
}

