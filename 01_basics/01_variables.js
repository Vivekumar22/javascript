const accountId = 2100030605
let accountEmail = "vivek@gmail.com"
var accountPassword = "4321"
accountCity = "sasaram"
let accountState; //throw undefine if u not keep any value in js
//accountId = 21. //not allowed

console.log(accountId);


/*
prefer not to use var bcoz of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);