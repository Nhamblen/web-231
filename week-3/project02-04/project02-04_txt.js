/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Noah Hamblen
      Date: 1/19/25

      Filename: project02-04.js
 */

const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Function that calculates prices of menu items
function calcTotal() {
  let cost = 0;
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // Adds PRICE to the variable cost if true (checked) or 0 if false (unchecked)
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  // Formats the cost before tax with formatCurrency function
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Calculates the tax on the cost
  let tax = cost * SALES_TAX;
  // Formats the tax with formatCurrency function
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Calculates the total cost (add cost+tax)
  let totalCost = cost + tax;
  // Formats the total cost with formatCurrency function
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
