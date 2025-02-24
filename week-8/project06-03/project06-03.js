"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Noah Hamblen
      Date: 2/24/25

      Filename: project06-03.js
*/

// useShip variable to reference the element with id "useShip"
const useShip = getElementById("useShip");

// Runs copyShippingToBilling function when clicked
useShip.addEventListener("click", copyShippingToBilling);
