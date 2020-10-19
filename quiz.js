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

startButton.addEventListener("click", startQuiz);
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
  Answ1.textContent = quest.Answ1;
  Answ2.textContent = quest.Answ2;
  Answ3.textContent = quest.Answ3;
  Answ4.textContent = quest.Answ4;
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
