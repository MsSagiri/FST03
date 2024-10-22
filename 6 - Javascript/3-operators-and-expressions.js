let numb1 = 10;
let numb2 = 5;
console.log("Addition (+)", numb1 + numb2);
console.log("Subtraction (-)", numb1 - numb2);
console.log("Multipication (*)", numb1 * numb2);
console.log("Division (/)", numb1 / numb2);
console.log("Exponent (**)", numb1 ** numb2);
console.log("Remainder (%)", numb1 % numb2);

// PEMDAS /BODMAS
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("Answer: ", answer);

//String Expression or Concatenation
console.log(20 + " " + "i am the number 20" + "!");

//Comparison Operators
// == /true or false
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==):", 5 == "5");
//Strictly Equal to '==='
console.log("Strictly Equal to (===):", 5 === "5");
//Not Equal to '!='
console.log("Strictly Equal to (!=):", 5 != 5);
console.log("Strictly Equal to (!=):", 5 != 4);

//Greater than (>)
console.log("Greater Than:", 5 > 3);
console.log("Greater Than:", 5 > 10);
//Less than (<)
console.log("Less Than: ", 3 < 5);
console.log("Less Than: ", 10 < 5);

//Logical Operators
// AND  = &&
// OR = ||
// NOT = !
let sunny = true;
let warm = false;
console.log("Is it sunny AND warm?", sunny && warm);
console.log("Is it sunny OR warm?", sunny || warm);
console.log("NOT sunny?", !sunny);

//Assignment Expressions
let num3 = 10;
let num4 = 5;
// num3 = num3 + num4;
// console.log(num3);
//Addition Assignment '+='
// num3 += num4;
console.log(num3);
//Subtraction Assignment '-='
// num3-= num4;
console.log(num3);
//Multiplication Assignment '*='
// num3*= num4;
console.log(num3);
//Division Assignment '*='
// num3/= num4;
console.log(num3);
//Exponent Assignment '**='
// num3 **= num4;
console.log(num3);
//Remainder Assignment '**='
num3 %= num4;
console.log(num3);
