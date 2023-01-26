var startButton = document.querySelector(".start-quiz");
var answers = document.querySelector(".answers");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");

startButton.addEventListener("click",startQuiz);

function startQuiz() {
    runQuestion.classList.add('show');
    // runQuestion.classList.remove('hide')
    runQuestion();
    setTimer();
};

var questions = document.querySelector("questions");
var correct = [0];
var answers = ["a","b,","c","d"];

// questions and answer arrays 
var questions = [
 {
     question1: "What does {} tell you?",
     answers: {
        a:"Function",
        b:"Array",
        c:"Class",
        d:"Two Birds Flying Sideways",
     },
     correct: "a",
 },
 {
     question2: "What do you use to connect a JS file to the HTML file?",
     answers: {
        a:"<script>",
        b:"<link>",
        c:"<class>",
        d:"src",
     },
     correct: "a",
 },
 {
     question3: "How do you set a timer interval in JS?",
     answers: {
        a:"timerInterval",
        b:"timerSet",
        c:"setTimer",
        d:"setInterval",
     },
     correct: "d",
 },
];

correct = 0

function runQuestion() {
    var questions = ["question1", "question2", "question3"];
    var answers = questions[answer];
    questions.textContent = questions[correct].question;
    answers.textContent = questions[correct].answers[0];
    answers.textContent = questions[correct].answers[0];
    answers.textContent = questions[correct].answers[0];
    answers.textContent = questions[correct].answers[0];

    for (let correct = 0; correct < questions.length; correct++) {
        if (userchoice === correct) {
            console.log(correct)
            correctCounter++;
            nextQuestion();
        } else {
            console.log(userchoice);
            incorrectCounter++;
            nextQuestion();
        };
      }        
    }
  
  answers.addEventListener("click", function () {
    var userchoice = userchoice.target.textContent;
    if (userchoice === correct) {
        console.log(userchoice);
        console.log(question.correct);
    }
  });

  function nextQuestion() {
    if (userchoice=questions.correct) {
        correctCounter++
        runQuestion();
    }
  }



  function finalScore() {
    correct.textContent = correctCounter;
    localStorage.setItem("correct", correct)
    incorrect.textContent = incorrectCounter;
    localStorage.setItem("incorrect", incorrect)

}


  var secondsLeft = 10

  function setTimer() {
      // sets timer interval to countdown and display on each question 
   var timerInterval = setInterval(function() {
      secondsLeft--;
      timerInterval.textContent = secondsLeft + "seconds remaining for question";
  
      if (secondsLeft === 0) {
          // stops timer if action is taken on quiz before time is up
          clearInterval(timerInterval);
          // calls sendMessage function to display moving to next question message
          nextQuestion();
          }
  
      }, 1000);
   }
  
   setTimer();


// user score display and finalScoreials logging to localStorage

 var submissionEl = document.getElementById("submit");
   
 submissionEl.addEventListener("click", function (userchoice) {
   userchoice.preventDefault()
   console.log(response);
   var response = 
       "Thanks for playing" + nameInitialsInput.value +  ".";
        submissionResponseEl.textContent + `You answered ${correctCounter} correct and ${incorrectCounter} incorrect`; 
});

localStorage.setItem("results", JSON.stringify(finalScore));


// var imageContainer = document.querySelector(".ending-gif");
//            imageContainer.addEventListener("click", function(userchoice){
//                var element=userchoice.target;
//           if(element.matches("img")){
//                var state = element.getAttribute("data-state");
           
//             if (state === "still") {
//                   element.setAttribute("data-state", "animate");
//               element.setAttribute("src", element.dataset.animate);
//                } else {
//                element.dataset.state = "still";
//                element.setAttribute("src", element.dataset.still);
//                }
//              }
//            });