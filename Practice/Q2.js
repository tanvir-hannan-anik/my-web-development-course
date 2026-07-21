/* 2. ATM Machine ⭐⭐⭐⭐⭐

Scenario

Customer enters

PIN
Balance
Withdraw Amount

Rules

PIN must be correct.
Withdraw amount must be multiple of 500.
Withdraw amount cannot exceed balance.
Minimum remaining balance = 1000

Example

Balance = 20000
Withdraw = 4500

Output:
Invalid Amount

Another

Withdraw = 5000

Output
Withdraw Successful
Remaining Balance = 15000 

npm install prompt-sync*/

const prompt = require("prompt-sync")();

let pin = Number(prompt("Enter your PIN: "));
let balance = 3000;
let withdraw = Number(prompt("Enter your Withdraw Amount: "));

if (pin !== 1234) {
    console.log("Invalid PIN");
} else if (withdraw > balance) {
    console.log("Insufficient balance");
} else {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Withdrawn:", withdraw);
    console.log("Current Balance:", balance);
}
