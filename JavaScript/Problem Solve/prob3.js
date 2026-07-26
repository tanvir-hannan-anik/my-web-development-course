/* Factorial of a number */

// let n = 7;
// for (let i = n; i > 1; i--) {
//   n = n * (i - 1);
// }
// console.log(n);

// function checkFactorial(num) {
//   for (let i = num; i > 1; i--) {
//     num = num * (i - 1);
//   }
//   return num;
// }

// let result = checkFactorial(7);
// console.log(result);


function checkFactorial(num) {
    let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac = fac * i ;
  }
  return fac;
}

let result = checkFactorial(7);
console.log(result);


