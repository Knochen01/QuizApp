const quizData =  [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const answer = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBbtn = document.getElementById("submit");


let currentQuestion = 0;
let score = 0;


const getSelected = () => {
    const answer = document.querySelectorAll(".answer");
    let answerS = undefined
    answer.forEach(data => {
        if (data.checked) {
           answerS = data.id
        }
    }) 
    return answerS
}

function loadQuiz() {
    deselectAnswers()
    const currentQuiz = quizData[currentQuestion];

    questionEl.innerHTML = currentQuiz.question
    a_text.innerHTML = currentQuiz.a
    b_text.innerHTML = currentQuiz.b
    c_text.innerHTML = currentQuiz.c
    d_text.innerHTML = currentQuiz.d
}

const deselectAnswers = () => {
    answer.forEach(data => {
        data.checked = false
    })
}

submitBbtn.addEventListener("click", () => {
    const answerS = getSelected();
    console.log(answerS)
    if (answerS) {
        if (answerS === quizData[currentQuestion].correct) {
            score++
        }
        currentQuestion++;
        if (currentQuestion < quizData.length)  {
            loadQuiz() 
        } else {
           quiz.innerHTML = `<h2>You answered correctly ${score} out of ${quizData.length} questions.
            <button onclick="location.reload()">Play Again</button>`         
        }
    }
    })

loadQuiz();