const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: "What is the smallest city in the world?",
        answers: [
            { text: 'Vatican City', correct: true },
            { text: 'Bhutan', correct: true },
            { text: 'Nepal', correct: false },
            { text: 'Sri Lanka', correct: false }
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: 'Thar', correct: false },
            { text: 'Antartica', correct: true },
            { text: 'Gobi', correct: false },
            { text: 'Sahara', correct: false }
        ]
    }
];

const questionEle = document.getElementById('question');
const ansBtnsEle = document.getElementById('answer-buttons');
const nextBtnEle = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    nextBtnEle.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEle.innerText = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add('btn');

        if(answer.correct) {
            btn.dataset.correct = answer.correct;
        }

        btn.addEventListener('click', (e) => {
            const currBtn = e.target;
            const isCorrect = currBtn.dataset.correct === 'true';
            if (isCorrect) {
                currBtn.classList.add('correct');
            } else {
                currBtn.classList.add('incorrect');
            }
            Array.from(ansBtnsEle.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            // nextBtnEle.style.display = 'block';
        })

        ansBtnsEle.appendChild(btn);
    });
}

function resetState() {
    nextBtnEle.style.display = 'none';
    while(ansBtnsEle.firstChild){
        ansBtnsEle.removeChild(ansBtnsEle.firstChild);
    }
}

startQuiz();