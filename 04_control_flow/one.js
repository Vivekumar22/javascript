// if

const isUserLoggedIn = true
const temperature = 410

if(temperature === 41){
    console.log("less than 50");
} else{
    console.log("temperature is greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

const balence = 1000

if(balence> 500) console.log("test"),
console.log("test2");


if(balence < 500){
    console.log("less than 500 ");
} else if (balence <750) {
    console.log("less than 750");
}else if (balence <900) {
    console.log("less than 900");
}else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}





