/* Check is a number is even or odd */

// let number = 13;
// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

function evenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let result = evenOdd(3);
console.log(result);
