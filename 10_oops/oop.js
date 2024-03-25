// Object literal

const user = {
    username: "vivek",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details From database");
        console.log(`Username:${this.username}`);
        console.log(this); // it gives whole object
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


// constructor function

function User(username, logingCount, isLoggedIn){
    this.username = username
    this.loginCount = logingCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = new User("vivek", 12, true)
// const userTwo = User("chaiaurcode", 20, false)  automaticaaly it overwrite the things without printing also so use new keyword to getting a new instance
const userTwo = new User("chaiaurcode", 20, false)
console.log(userOne.constructor);
console.log(userTwo);

/*
when you write new keyword then what happend internally:
step 1: a new empty instance or object is created
step 2: and then constructor function is called by new keyword
step 3: inject all variables
*/