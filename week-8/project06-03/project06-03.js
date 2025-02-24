"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Noah Hamblen
      Date: 2/24/25

      Filename: project06-03.js
*/

// Get the checkbox element with id "useShip" to reference it
const useShip = document.getElementById("useShip");

// Add an event listener to run the copyShippingToBilling function when the checkbox is clicked
useShip.addEventListener("click", copyShippingToBilling);

// Function to copy shipping address to billing address if the checkbox is checked
function copyShippingToBilling() {
  // Check if the "useShip" checkbox is checked
  if (useShip.checked) {
    // Copy values from shipping fields to corresponding billing fields
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;

    document.getElementById("lastnameBill").value =
      document.getElementById("lastnameShip").value;

    document.getElementById("address1Bill").value =
      document.getElementById("address1Ship").value;

    document.getElementById("address2Bill").value =
      document.getElementById("address2Ship").value;

    document.getElementById("cityBill").value =
      document.getElementById("cityShip").value;

    document.getElementById("countryBill").value =
      document.getElementById("countryShip").value;

    document.getElementById("codeBill").value =
      document.getElementById("codeShip").value;

    // Set the selected index of the billing state dropdown to match the shipping state dropdown
    document.getElementById("stateBill").selectedIndex =
      document.getElementById("stateShip").selectedIndex;
  }
}

// Get all input elements of type text from the form to validate them
let formElements = document.querySelectorAll("input[type='text']");
// Store the count of form elements
let fieldCount = formElements.length;
// Get the error box element to display validation messages
let errorBox = document.getElementById("errorBox");

// Add an event listener to each text input element to show validation errors
formElements.forEach((element) => {
  element.addEventListener("invalid", showValidationError);
});

// Function to handle invalid input and display an error message
function showValidationError(evt) {
  // Prevent the default form submission behavior
  evt.preventDefault();
  // Set the error message in the error box
  errorBox.textContent = "Complete all highlighted fields";
}
