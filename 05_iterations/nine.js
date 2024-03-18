// reduce()

const myNumns = [1, 2, 3]

// const myTotal = myNumns.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 2)

const myTotal = myNumns.reduce(  (acc, curr)  => acc + curr ,0 )

console.log(myTotal);


const shooppingCart = [
    {
        itemName: "js course",
        price: 999,

    },
    {
        itemName: "mobile dev course",
        price: 5999,

    },
    {
        itemName: "data scientist",
        price: 9999,

    },
    
]

const priceToPay = shooppingCart.reduce( (acc, item) => acc+ item.price , 0)
console.log(priceToPay);