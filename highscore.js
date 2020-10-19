var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highScorePrint = document.querySelector(".scoresHTML");
var clearHighScore = document.getElementById("clearScores");

console.log(highscores);
console.log(highScorePrint);
console.log(clearHighScore);

window.addEventListener("load", function () {
  printHighScore();
});
