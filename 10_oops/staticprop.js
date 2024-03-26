class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

     static createId(){
        return `123`
    }
}

const vivek = new User("vivek")
//console.log(vivek.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
//console.log(iphone.createId());
console.log(Teacher.createId()); // by using child class name can access the static method from parent class