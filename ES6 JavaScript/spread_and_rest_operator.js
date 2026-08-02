// let number = [10, 20, 30, 40];
// console.log(...number);
// let maxNumber = Math.max(...number);
// console.log(maxNumber);

// let number2 = [...number, 500, 433, 232, 54, 23];
// console.log(number2);
// console.log(...number2);

let student = {
  name: "Anik",
  age: 24,
};

let student2 = { ...student, cgpa: "4.00" };
student.something = "test";
console.log(student2);


/* Rest Operator */

function sum(a,b,c, ...restNumber){
    let sum =0;
    for(let number of restNumber){
        sum+=number;
    }
    return a+b+c+sum;
}
console.log(sum(10,20,30,40,50,60,70,80,90,200,335,54,3));