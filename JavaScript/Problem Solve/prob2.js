/* Sum of range of numbers */

// let n = 5;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
// }

// console.log(sum);

function sumNum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}

let result = sumNum(100);
console.log(result);
