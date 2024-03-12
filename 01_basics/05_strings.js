const name = "vivek"
const repoCount = 50

//console.log(name+repoCount+"value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//2nd way to declare string
const gameName = new String('vivek') //as object

//methods
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,4)  // take -ve value from end with starting -1
console.log(anotherString);

const newStringOne = "      vivek          "//trim() remove extraspace
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vivek.com/vivek%12singh"//replace() kisko hatana hai aur kisse hatana hai
console.log(url.replace('%12', '-'));

console.log(url.includes('vi'));//includes() wo substring hai ya nhi

//string convert into array
const ex = 'vivek is a good programmer'
console.log(ex.split());

/*
String keywords methods
1. length
2. toLowerCase()
3. charAt(indexValue)
4. indexOf(char)
5. substring(1,5) =>print 1 to 4 only
6. slice(-2,4) =>can take -ve value
7. trim() =>reove white space
8. replace("kisko","kis se")
9. includes("check substring")
10. split() =>array u can give anything to separate
*/



