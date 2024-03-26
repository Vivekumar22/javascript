class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username) // it automaticaaly take this keyword of Teacher class no need to do call
        this.email =email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse()

const masalachai = new User("masalachai")
masalachai.logMe()

console.log(chai === Teacher); // here yah bs ek object dega exact same nhi hoga 

console.log(chai instanceof Teacher);
console.log(chai instanceof User);