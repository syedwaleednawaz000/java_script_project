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
