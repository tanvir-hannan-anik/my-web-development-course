// let str ="anik";
// let reverseStr = "";

// for(let i=str.length -1;i>=0;i--){
//     let letter = str[i];
//     reverseStr = reverseStr + letter;
// }

// console.log(reverseStr);

// if(str === reverseStr){
//     console.log("Palindrome");
// }else{
//     console.log("Not Palindrom");
// }



function checkPalindrom(str){
    let reverseStr = "";

for(let i=str.length -1;i>=0;i--){
    let letter = str[i];
    reverseStr = reverseStr + letter;
}

console.log(reverseStr);

if(str === reverseStr){
    console.log("Palindrome");
}else{
    console.log("Not Palindrom");
}
}

let result =  checkPalindrom("madam");
console.log(result);