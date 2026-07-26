// let str = "tanvirHannanAnik";
// let vowels = "aeiouAEIOU";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let letter = str[i];
//   if (vowels.includes(letter)) {
//     console.log(letter, "is Vowels");
//     count++;
//   } else {
//     console.log(letter, "is consonant");
//   }
// }
// console.log(count);

function countVowel(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (vowels.includes(letter)) {
      console.log(letter, "is Vowels");
      count++;
    } else {
      console.log(letter, "is consonant");
    }
  }
  return count;
}

let result1 = countVowel("tanvirHannanAnik");
console.log(result1);
let result2 = countVowel("NusratJahanJitu");
console.log(result2);
