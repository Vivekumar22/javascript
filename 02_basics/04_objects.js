// here we see object create as singleton method
//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "vivek"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "random@gmail.com",
    fullname: {
        userFullName: {
            firstname: "vivek",
            lastname: "kumar"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstname);

 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


// merging object
const obj4 = {obj1 , obj2}
const obj5 = Object.assign(  {} , obj1 , obj2  ,obj4)  //it merge all object : whatever written at first is considered as target means all value going into that variable from all 
Object.assign(target , source ,source ......)
// spreading take glass and leave to ground 
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);


// when values comes from database like array of object

const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },{

    },
    {

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //return all keys in array
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('id')); // here can check key
console.log(tinderUser.hasOwnProperty('2'));
