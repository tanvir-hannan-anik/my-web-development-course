/* Restaurant Billing System ⭐⭐⭐⭐⭐
Customer orders

Burger = 2
Pizza = 1
Drinks = 3

Prices
Burger = 350
Pizza = 900
Drink = 120

Rules
If bill > 5000
20% discount

Else if bill >3000
10%

Else
No Discount

Then
Add VAT 5%

Print Final Bill */

let burger_quantity = 2;
let pizza_quantity = 1;
let drinks_quantity = 3;

let priceBurger = 350;
let pricePizza = 900;
let priceDrink = 120;

let total_bill =
  burger_quantity * priceBurger +
  pizza_quantity * pricePizza +
  drinks_quantity * priceDrink;

let discount = 0;

// Calculate discount
if (total_bill > 5000) {
  discount = total_bill * 0.20;
} else if (total_bill > 3000) {
  discount = total_bill * 0.10;
}

// Apply discount
total_bill = total_bill - discount;

// Calculate VAT
let vat = total_bill * 0.05;

// Add VAT
total_bill = total_bill + vat;

console.log("Discount:", discount);
console.log("VAT:", vat);
console.log("Final Bill:", total_bill);
