const prompt = require("prompt-sync")();

console.log("Random Trivia");

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the Only continent without an Active Volcano? ");
const correctAnswer1 = "Austrailia";

if (answer1.toUpperCase() === correctAnswer1) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const answer2 = prompt("What is The name of the cowboy in ToyStory? ");
const correctAnswer2 = "Woody";

if (answer2.toLowerCase() === correctAnswer2) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const answer3 = prompt("How many Legs does a spider Have? ");
const correctAnswer3 = "8";

if (answer3.toUpperCase() === correctAnswer3) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!");
console.log("You scored", percent.toString() + "%");