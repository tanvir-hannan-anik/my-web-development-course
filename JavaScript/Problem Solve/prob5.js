/* Reverse  */

// let str = "tanvir";
// let reverse = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reverse = reverse + letter;
// }

// console.log(reverse);

function reverseWord(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverse = reverse + letter;
  }
  return reverse;
}

let result = reverseWord("tanvir hannan anik");
console.log(result);

