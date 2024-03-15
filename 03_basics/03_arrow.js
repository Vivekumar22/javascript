const user = {
    username: "vivek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


//console.log(user.welcomeMessage);
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this); // this output context refer to empty object {} but if we run same command in browser inspect then we get windows thing bcoz we using their windows environment


// function chai(){
//     // let username = "vivek"
//     // console.log(this.username); : output: undefined 
//     console.log(this);
// }

// chai() // this keyword we can can use with object not with function



// Arrow function remove function keyword and put arrow after()

// const chai = () => {
//     let username = "vivek"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));


//Implicit return by arrow function
//const addTwo1 = (num1, num2) =>  ( num1 + num2 )

const addTwo2 = (num1, num2) =>   num1 + num2  // both function are same if we write curly bracket then must have to write return 

// if we have to return object through arrow function then must to keep ({username:"vivek"}) in this way
const addTwo3 = (num1, num2) =>  ( {username: "vivek"} )

console.log(addTwo3(3, 4));







