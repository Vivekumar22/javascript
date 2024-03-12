// date is a object

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 12)
let myCreateDate = new Date("2024-01-12")
//console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Date.now()); //giving date in millisecond

console.log(Math.floor(Date.now()/1000)) //in second for comarison

let newDate = new Date()
console.log(newDate.getMonth())

// `${newDate.getDay()} and time is${variable}

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})
