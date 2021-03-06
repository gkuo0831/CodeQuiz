//question variables

var answer1 = document.getElementById("button1");
var answer2 = document.getElementById("button2");
var answer3 = document.getElementById("button3");
var answer4 = document.getElementById("button4");
var question = document.getElementById("questions");
var correctAnswer = document.getElementById("correct-Incorrect");
var incorrectAnswer = document.getElementById("correct-Incorrect");

// define functions:

var questions = [
  {
    question: "What is the slowest animal in the world?",
    answer1: "Three-toed Sloth",
    answer2: "Snail",
    answer3: "Tortoise",
    answer4: "Starfish",
    correct: "Three-toed Sloth",
  },
  {
    question: "A group of lions is known as?",
    answer1: "A swarm",
    answer2: "A pride",
    answer3: "A gang",
    answer4: "A herd",
    correct: "A pride",
  },
  {
    question: "Which animal never sleeps?",
    answer1: "Fish",
    answer2: "Bullfrog",
    answer3: "Lizard",
    answer4: "Whale",
    correct: "Bullfrog",
  },
  {
    question: "Whats the fastest animal on earth?",
    answer1: "Wolf",
    answer2: "Lepord",
    answer3: "Cheetah",
    answer4: "Usain Bolt",
    correct: "Cheetah",
  },
];

//timer
var time = document.getElementById("timer");
var yourScore = document.querySelector(".display");
var submitButton = document.getElementById("buttonInitials");
var inputLine = document.getElementById("inlineFormInput");

var secondsLeft = 60;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    console.log(secondsLeft);
    time.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      cardQuestions.setAttribute("style", "display: none");
      displayJumbo.setAttribute("style", "display: block");
      yourScore.textContent = "Your score is: " + secondsLeft;
      startButton.setAttribute("style", "display: none");
      submitButton.setAttribute("style", "display: inline");
      inputLine.setAttribute("style", "display: inline-block");
    } else if (currentQuestion === 5) {
      clearInterval(timerInterval);
      console.log(secondsLeft);
      cardQuestions.setAttribute("style", "display: none");
      displayJumbo.setAttribute("style", "display: block");
      yourScore.textContent = "Your score is: " + secondsLeft;
      startButton.setAttribute("style", "display: none");
      submitButton.setAttribute("style", "display: inline");
      inputLine.setAttribute("style", "display: inline-block");
    }
  }, 1000);
}

//Creating start button
var startButton = document.getElementById("startQuiz");
var cardQuestions = document.getElementById("questionsCard");
var displayJumbo = document.querySelector(".jumbotron");

startButton.addEventListener("click", startQuiz);
function startQuiz() {
  setTime();
  firstQuestion();
  console.log("starting quiz");
  cardQuestions.setAttribute("style", "display:block");
  displayJumbo.setAttribute("style", "display: none");
}

var currentQuestion = 0;
//question function:
function firstQuestion() {
  var quest = questions[currentQuestion];
  questions.textContent = quest.questions;
  answer1.textContent = quest.answer1;
  answer2.textContent = quest.answer2;
  answer3.textContent = quest.answer3;
  answer4.textContent = quest.answer4;
}
var quizBtn = document.querySelectorAll(".quizBtn");

for (var i = 0; i < quizBtn.length; i++) {
  quizBtn[i].addEventListener("click", function userAnswer(event) {
    if (event.currentTarget.innerText === questions[currentQuestion].correct) {
      correctAnswer.textContent = "Correct + 5 sec";
      correctAnswer.setAttribute("style", "color: pink");
      secondsLeft = secondsLeft + 5;
      console.log("correct");
    } else {
      incorrectAnswer.textContent = "Incorrect - 5 sec";
      incorrectAnswer.setAttribute("style", "color: red");
      secondsLeft = secondsLeft - 5;
      console.log("Incorrect minus 5 seconds");
    }
    console.log(currentQuestion);
    currentQuestion++;

    if (currentQuestion < 5) {
      firstQuestion();
    }
  });
}

// creating Highscores:
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

submitButton.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("click");

  var initials = inputLine.value;
  var finalScore = { initials, secondsLeft };
  console.log("Final Score + finalScore");
  console.log(initials + "Score is:" + secondsLeft);

  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
});
