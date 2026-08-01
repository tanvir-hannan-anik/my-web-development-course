let arr = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
];

// let evenNumber = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenNumber.push(arr[i]);
//   }
// }
// console.log(evenNumber);
// let sum = 0;
// for (let key of evenNumber) {
//   sum = sum + key;
// }
// console.log(sum);

function getEvenNumbers(arr) {
  let evenNumber = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumber.push(arr[i]);
    }
  }
  return evenNumber;
}

function getSum(arr) {
  let sum = 0;
  for (let key of evenNumber) {
    sum = sum + key;
  }
  return sum;
}

let evenNumber = getEvenNumbers(arr);
console.log(evenNumber);

let sum = getSum(evenNumber);
console.log(sum);
