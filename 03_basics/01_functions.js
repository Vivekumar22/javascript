function sayMyname(){
    console.log("V");
    console.log("I");
    console.log("V");
    console.log("E");
    console.log("K");
}

sayMyname()     //sayMyName(it called reference) //sayMyName():executable

 function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
 }

function addTwoNumbers(number1, number2){
    //let result  = number1+ number2
    return number1+number2
 }

 const result = addTwoNumbers(2, 4)

 console.log("Result:", result);


 function loginUserMessage(username){
    //if(!username) can write same 
    if (username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage("Vivek"))
console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){   // using rest operator to give n number of parameters
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 600, 700)); // output is array


//passing a object to function

const user = {
    username: "vivek",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 22
})

// pass an array to function

const myNewArray = [ 100, 200, 300, 400 ]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([ 100, 600, 300, 400 ]))