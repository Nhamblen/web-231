/*    JavaScript 7th Edition
      Chapter 4
      Project 04-04

      Application to determine change from a cash amount
      Author: Noah Hamblen
      Date: 2/10/25

      Filename: project04-04.js
*/

// strict adherence for JavaScript syntax
"use strict";

// Global variables
let cashBox = document.getElementById("cash");
let billBox = document.getElementById("bill");
let changeBox = document.getElementById("change");

// Event handlers to be run when the cash or bill value changes
cashBox.addEventListener("change", runTheRegister);
billBox.addEventListener("change", runTheRegister);

// Function to reset the values in the web page
function zeroTheRegister() {
  changeBox.value = 0;
  document.getElementById("bill20").innerHTML = 0;
  document.getElementById("bill10").innerHTML = 0;
  document.getElementById("bill5").innerHTML = 0;
  document.getElementById("bill1").innerHTML = 0;
  document.getElementById("coin25").innerHTML = 0;
  document.getElementById("coin10").innerHTML = 0;
  document.getElementById("coin5").innerHTML = 0;
  document.getElementById("coin1").innerHTML = 0;
  document.getElementById("warning").innerHTML = "";
}

// Function to run the cash register
function runTheRegister() {
  try {
    zeroTheRegister(); // Reset the values in the web page

    // Calculate the change
    let changeValue = cashBox.value - billBox.value;

    // Check if changeValue is negative (i.e., cash amount doesn't cover the bill)
    if (!(changeValue >= 0)) {
      throw new Error("Cash amount doesn't cover the bill");
    }

    // If no exception is thrown, continue with the regular process
    changeBox.value = formatCurrency(changeValue); // Format the change as currency
    calcChange(changeValue); // Determine the units of currency needed for the change

  } catch (error) {
    // Handle the exception by displaying the error message
    document.getElementById("warning").innerHTML = error.message;
  }
}

// Function to calculate the change by each unit of currency
function calcChange(changeValue) {
  // Determine the number of $20 bills
  let bill20Amt = determineCoin(changeValue, 20);
  document.getElementById("bill20").innerHTML = bill20Amt;
  changeValue -= bill20Amt * 20;

  // Determine the number of $10 bills
  let bill10Amt = determineCoin(changeValue, 10);
  document.getElementById("bill10").innerHTML = bill10Amt;
  changeValue -= bill10Amt * 10;

  // Determine the number of $5 bills
  let bill5Amt = determineCoin(changeValue, 5);
  document.getElementById("bill5").innerHTML = bill5Amt;
  changeValue -= bill5Amt * 5;

  // Determine the number of $1 bills
  let bill1Amt = determineCoin(changeValue, 1);
  document.getElementById("bill1").innerHTML = bill1Amt;
  changeValue -= bill1Amt * 1;

  // Determine the number of quarters
  let coin25Amt = determineCoin(changeValue * 100, 25);
  document.getElementById("coin25").innerHTML = coin25Amt;
  changeValue -= coin25Amt * 0.25;

  // Determine the number of dimes
  let coin10Amt = determineCoin(changeValue * 100, 10);
  document.getElementById("coin10").innerHTML = coin10Amt;
  changeValue -= coin10Amt * 0.1;

  // Determine the number of nickels
  let coin5Amt = determineCoin(changeValue * 100, 5);
  document.getElementById("coin5").innerHTML = coin5Amt;
  changeValue -= coin5Amt * 0.05;

  // Determine the number of pennies
  // The Math.round() method rounds the value to the nearest integer
  let coin1Amt = Math.round(changeValue * 100);
  document.getElementById("coin1").innerHTML = coin1Amt;
}

/* ================================================================= */

// Function to determine the largest whole number of currency units that
// can fit within the cash value
function determineCoin(cashValue, currencyUnit) {
  // The parseInt() function returns the integer value of the ratio
  return parseInt(cashValue / currencyUnit);
}

// Function to display a numeric value as a text string in the format ##.##
function formatCurrency(value) {
  return value.toFixed(2);
}
