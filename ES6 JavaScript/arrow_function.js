const sayHi = () => "Hi";
console.log(sayHi());

const sayGreet = (name = "Guest") => `Hello ${name}, Good Morning`;
console.log(sayGreet("anik"));
console.log(sayGreet());

const sumMul = (a, b) => {
  const sum = a + b;
  const mul = sum * 3;
  return mul;
};
console.log(sumMul(5, 5));
