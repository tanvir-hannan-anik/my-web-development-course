// let arr = [500, 29, 544, 94, 643];

// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < arr[0]) {
//     largest = arr[i];
//   }
// }

// console.log(largest);


function largestNumber(arr){
    let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) { 
    largest = arr[i];      
  }
}
return largest;
}

let result = largestNumber([500, 60, 544, 94, 643]);
console.log(result);