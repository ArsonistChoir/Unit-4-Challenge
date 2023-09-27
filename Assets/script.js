const startCard = document.getElementById("start-card");
const startBtn = document.getElementById("start-btn");
const quizCard = document.getElementById("quiz-card");
const questionTitle = document.getElementById("question-title");
let count = 0
const questions = [{
    question: "Dummy Text", 
    choices: ["A","B","C"],
    answer: "B"
}, {
    question: "Dummy Text", 
    choices: ["A","B","C"],
    answer: "C"
}, {
    question: "Dummy Text", 
    choices: ["A","B","C"],
    answer: "A"
}]

function startQuiz() {
    startCard.style.display = "none"
    quizCard.style.display = "block"
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[count].question
    for (let i = 0; i < questions.length; i++) {
        const element = array[i];
       //create a button
       //add text to button
       //attach an event listener to button
       //when button is clicked, it'll fire off a function to check the answer
       //whether the answer correct or not, increment count varible (count++)

    }
// document.createElement("button");
// document.createElement("button");
// document.createElement("button");
}

startBtn.addEventListener("click", startQuiz);

//Make starter page
//Make start button
//Clear start page
//Start timer
//Start test
//Make wrong answer reduce time
//Make correct answer continue
//Make scoreboard
//Make scoreboard store to local