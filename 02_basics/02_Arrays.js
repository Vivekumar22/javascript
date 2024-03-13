const marvel_heros = ["thor","ironma","spiderman"]
const dc_heros = ["superman","Batman","flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allheroes = marvel_heros.concat(dc_heros) //concat make new array
console.log(allheroes);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread do same thing as concat
console.log(all_new_heros);

const another_array  = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //flat make one array
console.log(real_another_array);

console.log(Array.isArray("vivek"));
console.log(Array.from("vivek")); // change to array
console.log(Array.from({name:"vivek"})); //have to give key or value which have to make 


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));



