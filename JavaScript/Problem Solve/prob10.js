function smallestNumber(arr){
    let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) { 
    smallest = arr[i];      
  }
}
return smallest;
}

let result = smallestNumber([500, 60, 544, 94, 643]);
console.log(result);