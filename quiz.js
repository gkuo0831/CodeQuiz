// define functions:

var questionsContainer = [
  (question1 = {
    question: "What is the slowest animal in the world?",
    correctAnsw1: "Three-toed Sloth",
    answerArray: ["Three-toed Sloth", "Snail", "Tortoise", "Starfish"],
  }),
  (question2 = {
    question: "A group of lions is known as?",
    correctAnsw2: "A pride",
    answerArray: ["A swarm", "A group", "A gang", "A herd"],
  }),
  (question3 = {
    question: "Which animal never sleeps?",
    correctAnsw3: "Bullfrog",
    answerArray: ["Fish", "Bullfrog", "Lizard", "Whale"],
  }),
  (question4 = {
    question: "Whats the fastest animal on earth?",
    correctAnsw4: "Cheetah",
    answerArray: ["Wolf", "Lepord", "Cheetah", "Usain Bolt"],
  }),
];

//Creating start button
var startButton = document.getElementById("startQuiz");
var cardQuestions = document.getElementById("questionsCard");
var displayJumbo = document.querySelector(".jumbotron");

startBtn.addEventListener("click", startQuiz);
function startQuiz() {
  setTime();
  firstQuestion();
  console.log("starting quiz");
  cardQuestions.setAttribute("style", "display:block");
  displayJumbo.setAttribute("style", "display: none");
}

//question variables

var answer1 = document.getElementById("button1");
var answer2 = document.getElementById("button2");
var answer3 = document.getElementById("button3");
var answer4 = document.getElementById("button4");
var question = document.getElementById("questions");
var correctAnswer = document.getElementById("correct-Incorrect");
var incorrectAnswer = document.getElementById("correct-Incorrect");

var currentQuestion = 0;
//question function:
function firstQuestion() {
  var quest = questions[currentQuestion];
  question.textContent = quest.question;
  correctAnsw1.textContent = quest.correctAnsw1;
  correctAnsw2.textContent = quest.correctAnsw2;
  correctAnsw3.textContent = quest.correctAnsw3;
  correctAnsw4.textContent = quest.correctAnsw4;
}
var quizBtn = document.querySelectorAll(".quizBtn");

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
