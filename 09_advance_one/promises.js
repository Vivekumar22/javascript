const promiseOne = new Promise(function(resolve,reject){
     // Do an async task
     // DB calls, cryptography, network
     setTimeout(function(){
        //console.log('async tak is completed');
     },1000)
     resolve()
}) 

promiseOne.then(function(){
    console.log("promise consumed");
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"vivek",
        email:"chaiWithvivek@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
    if(!error){
        resolve({username: "Aryan", password:"1234"})
    }else{
        reject('ERROR: something went wrong')
    }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})



// consume promise by async await
const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"javascript", password:"567"})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function promiseFiveConsume(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

promiseFiveConsume()



// async function getAllUsers(){ 
//     try {
           // fetch is retirning a promise
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // .json() is used to convert string into object
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()




// this do same work like getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

