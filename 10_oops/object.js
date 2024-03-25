function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


/*
When you write chai.printMe(), the following steps occur internally:

The JavaScript engine first looks for the chai object in memory, which was created using the createUser constructor function.

It then checks if there's a property called printMe directly on the chai object. Since there isn't one, it looks up the prototype chain.

The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from their prototype. In this case, when the chai object was created, it inherited the printMe method from the createUser.prototype.

The JavaScript engine finds the printMe method on the createUser.prototype.

It executes the printMe method in the context of the chai object. Inside the printMe method, this refers to the object on which the method was called, which is chai.

The console.log statement inside the printMe method is then executed, printing the score of the chai object to the console.

So, when you call chai.printMe(), it prints the score of the chai object, which is 25 in this case. This is how the method invocation is linked to the object and executed step by step.





*/