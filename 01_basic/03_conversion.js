let age = false


console.log(typeof age)
let newAge = Number(age)
console.log(typeof newAge)
console.log(newAge)
////////////////
let logIn = 0
let checkLogIn = Boolean(logIn)
console.log(checkLogIn)
//////////////////
let someNumber = 3343
let newString = String(someNumber)
console.log(newString);

// arith matic 
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
console.table([sum,difference,product,quotient,remainder]);
console.log("======== Comparison ==========");
let x = 10;
let y = 5;
console.log(x === y); // Strict equality
console.log(x !== y); // Strict inequality
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log("========== operation ============");
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // AND
console.log(isTrue || isFalse); // OR
console.log(!isTrue); // NOT
console.log("========= Comparision ==========");
console.log(5 == "5");  // true (type coercion)
console.log(5 === "5"); // false (strict equality)
console.log(5 != "5");  // false (type coercion)
console.log(5 !== "5"); // true (strict inequality)
console.log(true && "Hello");  // "Hello" (type coercion)
let obj1 = { key: "value" };
let obj2 = { key: "value" };
console.log(obj1 == obj2);  // false (different references)
console.log(NaN === NaN);  // false
console.log(typeof "Hello");  // "string"
console.log("===============check object=================");

let people = [
    {
      name: "Alice",
      age: 30,
      photos: [
        { filename: "alice1.jpg", description: "Profile picture" },
        { filename: "alice2.jpg", description: "Vacation in Paris" },
        { filename: "alice3.jpg", description: "With friends" }
      ]
    },
    {
      name: "Bob",
      age: 25,
      photos: [
        { filename: "bob1.jpg", description: "At the beach" },
        { filename: "bob2.jpg", description: "Family reunion" }
      ]
    },
    {
      name: "Charlie",
      age: 35,
      photos: [
        { filename: "charlie1.jpg", description: "Hiking trip" },
        { filename: "charlie2.jpg", description: "Skiing in the Alps" },
        { filename: "charlie3.jpg", description: "Work conference" }
      ]
    }
  ];
  for (let index = 0; index < people.length; index++) {
    console.log(`this is person ${String(index)} ${people[index].name}`);
    for (let indexTwo = 0; indexTwo < people[index].photos.length; indexTwo++) {
        console.log(`this is person photo ${String(indexTwo)} ${people[index].photos[indexTwo].filename}`);
      }
  }
  