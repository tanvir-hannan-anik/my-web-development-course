// let arr = [29, 43, 53, 24, 65, 76, 445, 353, 234, 23, 66, 23, 65];

// let value = 30;

// let filterArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > value) {
//     filterArr.push(arr[i]);
//   }
// }

// console.log(filterArr);

function getFilterd(arr, value) {
  let filterArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      filterArr.push(arr[i]);
    }
  }

  return filterArr;
}

console.log(getFilterd([29, 43, 53, 24, 65, 76, 445, 353, 234, 23, 66, 23, 65],45));