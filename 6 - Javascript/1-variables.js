// This is a single-line comment
/* 
    This is a multiple 
    line
    comment
*/
let firstName = "John";
console.log("The first name is :", firstName);
var lastName = "Doe";
console.log(lastName);
const birthday = "01-24-2020";
console.log(birthday);
// let = mutable/changable
// var = mutable/changable
// const = unmutable/unchangable
firstName = "Justin";
console.log("The first name is :", firstName);
// This produce error because const is unmutable or unchangable
// birthday = "10-15-2020";
// console.log("The first name is :", birthday);
if (true) {
  let block = "stone"; // Block scope
  var stone = "lime"; // global block scope
  console.log(block);
  console.log(stone);
}
console.log(stone);
// console.log(block);
