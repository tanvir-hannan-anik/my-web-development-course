const student = {
  name: "Anik",
  roll: 21,
  age: 24,
};

const keys = Object.keys(student);
const values = Object.values(student);
const entries = Object.entries(student);

// console.log(entries);

// for (let elem of entries) {
//   console.log(elem);
//   const [key, value] = elem;
//   console.log(key, value);
// }



// delete student.age;
// console.log(student);


const bankAccount = {
    accountNumber: "12135",
    balance: 5000
}

Object.seal(bankAccount)

delete bankAccount.balance; //not work beacuse seal
bankAccount.balance = 6000; //work only for edit 
bankAccount.nomineeName = "Abir"; // add not work

console.log(bankAccount);



const birthCertificate = {
    name: "Anik",
    birthDate: "07-02-2004",
    cerNumber: "29738652667"
}

Object.freeze(birthCertificate)

delete birthCertificate.name; //not work for delete
birthCertificate.cerNumber = "1273656132"; //not work for Edit
birthCertificate.new = "test"; //not work for ADD

console.log(birthCertificate);