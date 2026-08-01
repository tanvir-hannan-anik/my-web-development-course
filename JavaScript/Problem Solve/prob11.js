// let arr = [100, 299, 34, 63, 86, 23];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// let avg = sum / arr.length;

// console.log(sum);
// console.log(avg);

function checkAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  let avg = sum / arr.length;
  return avg;
}

let result = checkAvg([39,23,54,23]);
console.log(result);