/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Noah Hamblen
      Date: 1/26/25

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

// Loops through menuItems
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

function calcTotal() {
  let orderTotal = 0;
  // Loops through menuItems
  for (let i = 0; i < menuItems.length; i++) {
    // Code to run if the item is checked
    if (menuItems[i].checked) {
      // Increase the orderTotal by the value of the checked item
      orderTotal += Number(menuItems[i].value);
    }
  }
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
