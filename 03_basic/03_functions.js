function myName({ name, age, education }) {
    console.log(name);
    console.log(parseInt(age));
    console.log(education);
    console.log("E");
    console.log("E");
    console.log("D");
}

const person = {
    name: 'waleed',
    age: 12,
    education: 'BSSE'
};

myName(person);


// function calculatePrice(...num){
//     let totalPrice = 0;
//     for(let index = 0; index<num.length;index++){
//         totalPrice += num[index];
//     }
//     return totalPrice
// }
// let listOfItem = [12,23,234,34,54,565,67,3236,45,23,434,334,54,54,54,56,56];
// console.log('this is price ',calculatePrice(...listOfItem));

function calculatePrice(num){
    let totalPrice = 0;
    for(let index = 0; index<num.length;index++){
        totalPrice += num[index];
    }
    return totalPrice
}
let listOfItem = [12,23,234,34,54,565,67,3236,45,23,434,334,54,54,54,56,56];
console.log('this is price ',calculatePrice(listOfItem));