//singleton
Object.create


//object literals : key is always consider as string but in map anything can give

const mySym = Symbol("key1")

const jsUser = {
    name: "vivek",
    "full name":"vivek kumar",
    age: 18,
    [mySym]: "kumar123", // to make symbol as key in object we can see this syntax
    location: "jaipur",
    email: "akhilkumar21222@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
//to access the object element :2 type
// console.log(jsUser.email);
// console.log(jsUser["email"]);
//console.log(jsUser.fullname);//we can't access like this if we declare intensionally as string
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);


//jsUser.email = "vivek@chatGpt.com"
//to freeze the object to be update after that we can write syntax but without giving error it run but value is not gonna change
//Object.freeze(jsUser)


jsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(jsUser.greeting); // it giving only function reference not a correct aoutput
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); // for taking same object as reference
}
console.log(jsUser.greetingTwo());






