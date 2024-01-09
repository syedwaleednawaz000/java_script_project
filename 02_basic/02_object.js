const person12 = new Object();
person12.name = 'John';
person12.age = 30;
person12.city = 'New York';
console.log(person12.name); // Output: 'John'
console.log(person12.city); // Output: 'John'
console.log(person12['age']); // Output: 30
person12.age = 31;
person12['city'] = 'San Francisco';
// delete person12.city;

console.log("===================== Car Object ======================");
const car = {
  brand: 'Toyota',
  model: 'Camry',
  start: function() {
    console.log('Engine started!');
  },
  stop() {
    console.log('Engine stopped.');
  }
};

car.start(); // Output: 'Engine started!'
car.stop();  // Output: 'Engine stopped.'

console.log("===================== Iterating through Properties ======================");
for (const key in person12) {
  console.log(`${key}: ${person12[key]}`);
}

console.log("===================== Object Destructuring ======================");
const { name, age } = person12;
console.log(name); // Output: 'John'
console.log(age);  // Output: 31

console.log("===================== Object Methods ======================");
const keys = Object.keys(person12);
console.log(keys); // Output: ['name', 'age', 'city']

const values = Object.values(person12);
console.log(values); // Output: ['John', 31, 'San Francisco']

const entries = Object.entries(person12);
console.log(entries);
// Output: [['name', 'John'], ['age', 31], ['city', 'San Francisco']]
