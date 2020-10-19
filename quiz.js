// define functions:

var questionsContainer = [
  (question1 = {
    question: "Where does Grace live?",
    correctAnsw: "USA",
    answerArray: ["USA", "UK", "Italy", "Lapland"],
  }),
  (question2 = {
    question: "Where does Grace live?",
    correctAnsw: "USA",
    answerArray: ["USA", "UK", "Italy", "Lapland"],
  }),
  (question3 = {
    question: "Where does Grace live?",
    correctAnsw: "USA",
    answerArray: ["USA", "UK", "Italy", "Lapland"],
  }),
  (question4 = {
    question: "Where does Grace live?",
    correctAnsw: "USA",
    answerArray: ["USA", "UK", "Italy", "Lapland"],
  }),
];

var highScore = [];
var scores = document.getElementById("scores");
var timer = document.getElementById("timer");
var startquiz = document.getElementById("start-quiz");
var startBtn = document.getElementById("start-btn");
var questions = document.getElementById("questions");
var questionpage = document.getElementById("question-page");
var answers = document.getElementById("answers");
var finalscore = document.getElementById("finalscore");
var back = document.getElementById("back");

startBtn.addEventListener("click", startQuiz);
//back.addEventListener("click");

let pagearray = [startquiz, questionpage, finalscore];

function hide() {
  for (let i = 0; i < pagearray.length; i++) {
    console.log(pagearray[i]);
    if (!pagearray[i].classList.contains("hide")) {
      pagearray[i].classList.add("hide");
    }
  }
}

function startQuiz() {
  console.log("Welcome");

  hide();
}

//same function for timer^
//create variables for state of true or false
//lettimer = 90s
//let secondleft; -- once they choose the wrong answer secondleft--;
//let numberCorrect
// let numberIncorrect;
//let finalScore=0;
//let questionIndex;

//function randomizes question array
//iside create empty question array to push the shuufled original array

//startquiz functiion start()
//numberCorrect=0
//numberIncorrect=0

//hide() function is called

//in arrayshuffle: use math.random or do directly
