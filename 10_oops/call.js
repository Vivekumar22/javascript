function SetUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

/*
agr hum without call kre toh execution toh hoga SetUserName but 
wo value set nhi ho paega kyuki jaise hi wo execute ho rha hai uska 
execution context gayab ho ja rha hai toh uska this v gayab ho ja rha 
hai isliye hum ek createUser ka this v pass krenge taki jab uska 
execution context gayab v ho jae toh iske this se wo value set kr de 
*/