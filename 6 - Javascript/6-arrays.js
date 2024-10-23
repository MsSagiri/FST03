// Arrays
let fruits = [
  "Banana",
  "Apple",
  "Orange",
  "Pear",
  "Avocado",
  "Durian",
  "Watermelon",
  "Guava",
  "Chico",
];
console.log("Fruits:", fruits);

// Array.length
console.log("Fruits Length:", fruits.length);

//.pop() method - remove elements to the array
fruits.pop("Berry");
fruits.pop();
console.log("Added a fruit:", fruits);
console.log("Added a fruit:", fruits.length);

//.splice() method
// 1 - Start positon;
// 2 - remove elements
// 3 - adding elements
fruits.splice(1, 5, "Strawberry");
fruits.pop();
console.log("Uses Splice method", fruits);
console.log("Uses Splice method", fruits.length);

//.forEach()
fruits.forEach(function (fruits) {
  console.log("Fruit:", fruits);
});
