//array is a object
// js arrays is a resizable
//shallow and deep copy 

const myArr = [1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //push at first
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(-9));

const newArr = myArr.join() //type is string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr);


// slice , splice : splice include the both value in range and it remove that element from original array

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);



