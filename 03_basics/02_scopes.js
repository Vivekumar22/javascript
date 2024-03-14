// {}: called scope

if(true){
    let a = 10
    var b = 20
    const c = 30
}

//console.log(a);
//console.log(b); // var don't have any scope 
//console.log(c);

function one(){
    const username = "vivek"

    function two(){     //we have to call two() otherwise it won't be executed when we call one()
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username = "vivek"
    if (username === "vivek") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++


console.log(addone(5)); // this type of call we can perform in this function only we can't do same for expression down one function

function addone(num){
    return num + 1
}




// in this way we can declare a function and store value in varible that we can say function name and say "expression" to this function decaration
//console.log(addTwo(5));
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))