function admissionConfermationMail(name, amount = 0) {
  let message = `Hello, ${name || "student"}, 
                   Your Payment is successful.
                   Your Paid amount is ${amount}`;

  return message;
}

console.log(admissionConfermationMail("Anik", 58900));
console.log(admissionConfermationMail());
