/* Array Destucturing */
const numbers = [10, 20, 30, 40, 50];
const [ten, twenty, , , fifty] = numbers;

console.log(ten, twenty, fifty);

/* Object Destucturing */

const student = {
  name: "Anik",
  roll: 21,
  age: 24,
  marks: {
    physics: 94,
    philosophy: 92,
    math: 44,
  },
};

const {
  age,
  name: fullName,
  marks: { philosophy, physics },
} = student;

console.log(age, fullName, philosophy, physics);
