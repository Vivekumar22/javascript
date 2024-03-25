let myName = "vivek     "

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// we injecting the function in one object but we know array and string and function is a also act as object
// so if we giving power to a common object then automattically it invokes in all array , string , function as well
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
}

// heroPower.hitesh()
// myHeros.hitesh()


// Now we gonna check if we give power or any properties to array like then is it access by object
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh() it gives error we can't do vice versa




// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User


// Modern  syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiAurCode          "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`$this.name`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"vivek".trueLength()
"iceTea".trueLength()