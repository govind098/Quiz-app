const questions = [
    {
        question: "What is celebrated on October 31st in India",
        answers: [
            { text: "World Environment Day", correct: false },
            { text: "Gandhi Jayanti", correct: false },
            { text: "Children's Day", correct: false },
            { text: "National Unity Day", correct: true },

        ]
    },
    {
        question: "The largest gulf in the world is",
        answers: [
            { text: "Gulf of Mexico", correct: true },
            { text: "Persian Gulf", correct: false },
            { text: "Gulf of Carpentaria", correct: false },
            { text: "Gulf of Mannar", correct: false },

        ]
    },
    {
        question: "The ionosphere contains ionized air that protects the earth from",
        answers: [
            { text: "the ultraviolet rays of the sun", correct: false },
            { text: "the infrared rays of the sun", correct: false },
            { text: "the falling meteorites", correct: true },
            { text: "None of the above", correct: false },

        ]
    },
    {
        question: "The largest city in Latin America is",
        answers: [
            { text: "Mexico city", correct: true },
            { text: "Caracas", correct: false },
            { text: "Rio-de-Janeiro", correct: false },
            { text: "Buenos Aires", correct: false },

        ]
    },
    {
        question: "Which of the following is correct about JavaScript",
        answers: [
            { text: "avaScript is Assembly-language", correct: false },
            { text: "JavaScript is an Object-Based language", correct: true },
            { text: "JavaScript is an Object-Oriented language", correct: false },
            { text: "JavaScript is a High-level language", correct: false },

        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let curentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    curentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'next';
    showQuestion();
}

function showQuestion() {
   resetState();
    let currentQuestion = questions[curentQuestionIndex];
    let questionNo = curentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", (e) => {
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if (isCorrect) {
                selectedBtn.classList.add("correct");
                score++;
            } else {
                selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button => {
                if (button.dataset.correct == "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
        });
    });
}
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }

}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
}

function handleNextButton() {
    curentQuestionIndex++;
    if (curentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (curentQuestionIndex < questions.length) {
        handleNextButton();
    } else{
        startQuiz();
    }
})

startQuiz();

