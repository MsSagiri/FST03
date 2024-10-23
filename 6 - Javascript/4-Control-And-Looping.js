// let temperature = 25;
// if (temperature < 0) {
//   console.log("It's Freezing!");
// } else if (temperature < 0) {
//   console.log("It's cool outside.");
// } else {
//   console.log("It is warm outside");
// }

let temperature = 25;
if (temperature < 0) {
  console.log("It's Freezing!");
} else if (temperature > 0 && temperature >= 50) {
  console.log("It's cool outside.");
} else {
  console.log("It is warm outside");
}

//switch case
let day = "Friday";
switch (day) {
  case "Monday":
    console.log("It is the start of the week.");
    break;
  case "Tuesday":
    console.log("It is the second day of the week.");
    break;
  case "Friday":
    console.log("It is the end of the weekdays.");
    break;
  default:
    console.log("It's just a regular day.");
}

//Looping Statement
//repeating execution of code block
// For Loop
// 1: Variable Initialization
// 2: Conditional Expression
// 3: Increment/Decrement
for (let i = 0; i <= 3; i++) {
  console.log("week", i);
}

// while Loop
let count = 0;
// while(count <= 3){
//     console.log("While Loop: ", count);
//     count ++;
// }

do {
  console.log("Do while:", count);
  count++;
} while (count <= 3);
