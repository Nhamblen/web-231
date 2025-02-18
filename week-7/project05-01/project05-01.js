"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Noah Hamblen
      Date: 2/17/25

      Filename: project05-01.js
*/

let timeID;
let questionList = document.querySelectorAll("div#quiz input");

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Function to check the user's answers in real-time
function checkAnswer(question, index) {
  if (question.value === correctAnswers[index]) {
    question.classList.remove("incorrect");
  } else {
    question.classList.add("incorrect");
  }
}

// Add event listeners to each question input for real-time checking
questionList.forEach((question, index) => {
  question.addEventListener("input", () => checkAnswer(question, index));
});

// Declare the ID for timed commands
// and the node list for questions
document.getElementById("startquiz").onclick = function () {
  document.getElementById("overlay").className = "showquiz"; // Show quiz on click
  timeLeft = quizTime; // Reset the time left
  quizClock.value = timeLeft; // Update timer display
  timeID = setInterval(countDown, 1000); // Start countdown every 1 second
};

function countDown() {
  if (timeLeft === 0) {
    clearInterval(timeID); // Stop the timer

    let totalCorrect = checkAnswers(); // Check answers

    if (totalCorrect === correctAnswers.length) {
      alert("Congratulations! You got 100%");
    } else {
      alert(
        `You answered ${totalCorrect} out of ${correctAnswers.length} questions correctly.`
      );
    }
    document.getElementById("overlay").className = "hidequiz"; // Hide the quiz display with a class after timer ends
  } else {
    timeLeft--; // Decrease time
    quizClock.value = timeLeft; // Update timer display
  }
}

// Function to check the users answers when the timer ends
function checkAnswers() {
  let totalCorrect = 0;
  questionList.forEach((question, index) => {
    if (question.value === correctAnswers[index]) {
      totalCorrect++;
      question.classList.remove("incorrect");
    } else {
      question.classList.add("incorrect");
    }
  });
  return totalCorrect;
}
