const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let punteggioUtente = 0
let questionNumber = 0
let currentQuestionIndex = 0
let quizfinito = 0
let risposteSbagliate = 0
let domandaCorrente = 1
let seconds


const consentCheckbox = document.getElementById("consent")
const proceed = document.getElementById("button")
const quizBox = document.querySelector("#quiz-section")
const resultBox = document.querySelector(".result-box")


function inizioQuiz() {
  if (consentCheckbox.checked) {
    svuotaPagina()
    renderQuestion()
  } else {
    alert("Devi spuntare la casella per proseguire!")
  }
}

function svuotaPagina() {
  const emptyPage = document.getElementById("start")
  emptyPage.innerHTML = "";
}

function svuotaPagina2() {
  const emptyPage = document.getElementById("contenitoreDomande")
  emptyPage.innerHTML = "";
}


function refreshQuiz() {
  window.location.reload(true)
}

function countDown() {
  let timer = document.getElementById("timer")

  clearInterval(seconds)
  let count = 25
  seconds = setInterval(function () {
    timer.textContent = count
    if (count <= 0) {
      clearInterval(seconds)
      endCountdown()
    }
    count--
  }, 1000)

  if (domandaCorrente === 10) {
    clearInterval(seconds)
    alert("Fine quiz")
    //alert("Risposte corrette : " + punteggioUtente + " Risposte sbagliate : " + risposteSbagliate)
    showResults()

  } 
}


function endCountdown() {
  alert("Tempo Scaduto!")
  renderQuestion()
}

function renderQuestion() {
  countDown()
  if (quizfinito > 0) {
    currentQuestionIndex++
    domandaCorrente++
  }
  quizfinito++

  let currentQuestion = questions[currentQuestionIndex]

  //mostriamo la domanda
  domanda.innerHTML = currentQuestion.question

  numeroDomande.innerHTML = "QUESTION " + domandaCorrente + "<span style='color: #6B2973;'> /10</span>"

  risposte.innerHTML = ''



  // mettiamo risposte alle domande
  let answers = currentQuestion.incorrect_answers
  answers.push(currentQuestion.correct_answer)


  //per ogni domanda mettiamo un bottone
  for (let i = 0; i < answers.length; i++) {
    let buttonElement = document.createElement("button")
    buttonElement.textContent = answers[i]
    buttonElement.id = "buttonsQuestions"
    risposte.appendChild(buttonElement)

    buttonElement.addEventListener("click", function () {
      if (buttonElement.textContent === currentQuestion.correct_answer) {
        punteggioUtente++;
      } else if (buttonElement.textContent = currentQuestion.correct_answer) {
        risposteSbagliate++
      }

      if (quizfinito >= 10) {
        showResults()
        //alert("Fine quiz")
        //alert("Risposte corrette : " + punteggioUtente + " Risposte sbagliate : " + risposteSbagliate)

      } else {

        renderQuestion()
      }
    })

  }
  let img = document.createElement("img")
  img.src = "assets/epicode_logo.png"
  img.id = "logoEpicode"
  logoEpicode.appendChild(img)

}

function showResults() {
  clearInterval(seconds)
  svuotaPagina2()
  
  let buttonElement = document.createElement("button")
  buttonElement.textContent = "Rate us!"
  buttonElement.id = "rate"
  rate.appendChild(buttonElement)
 
 quizBox.innerHTML = resultBox.innerHTML
  const scoreText = document.querySelector(".score-text")
  scoreText.textContent = `Your Score is ${punteggioUtente} out ${questions.length}`;


  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndValue = (punteggioUtente / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}%`;

    if(progressStartValue === progressEndValue) {
      clearInterval(progress)
    }
  }, speed);
}

const stars= document.querySelectorAll(".stars i");
console.log(stars);


stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
      const isActive = star.classList.contains("active");

      if (isActive) {
         
          for (let i = 0; i <= index1; i++) {
              stars[i].classList.remove("active");
          }
      } else {
          
          for (let i = 0; i <= index1; i++) {
              stars[i].classList.add("active");
          }
      }
  });
});








//collegamento pagina 

function navigaAPagina1() {

    window.location.href = "rating.html";
}

//invio valutazione
function navigaAPagina() {

    window.location.href = "grazie.html";
}


