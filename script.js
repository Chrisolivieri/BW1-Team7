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
const correctAnswers = questions.map(question => question.correct_answer)

const consentCheckbox = document.getElementById("consent");
const proceed = document.getElementById("button");


function inizioQuiz() {
    if (consentCheckbox.checked) {
        svuotaPagina()
        domandaUno()
    } else {
        alert("Devi spuntare la casella per proseguire!")
    }
}

function svuotaPagina() {
    const emptyPage = document.getElementsByTagName("body")[0]
    emptyPage.innerHTML = "";  
}

function domandaUno(){
  const divLogo = document.createElement("div")
  divLogo.id = "logoTimer"
  document.body.appendChild(divLogo)

  const containerLogo = document.getElementById("logoTimer")
  const logo = document.createElement("img")
  logo.src = "assets/epicode_logo.png"
  containerLogo.appendChild(logo)

  const containerTimer = document.getElementById("logoTimer")
  const timer = document.createElement("div")
  timer.id = "timer"
  timer.textContent = "25";
  containerTimer.appendChild(timer);
  const timerDisplay = document.getElementById('timer')

  let seconds = 25
  
      function countdown(){
        seconds--
        timerDisplay.textContent = seconds;
        if(seconds === 0){
          svuotaPagina()
          domandaDue()
        } return
      }
      setInterval(countdown, 1000)

  const title = document.createElement("h1")
  title.textContent = "What does CPU stand for?"
  document.body.appendChild(title)

  const buttonsContainer = document.createElement("div")
  buttonsContainer.id = "buttonsContainer"
  document.body.appendChild(buttonsContainer)

  const input1 = document.createElement("input")
  input1.type = "radio"
  input1.id = "choice1"
  input1.name = "choice"

  const label1 = document.createElement("label")
  label1.textContent = "Central Processing Unit"
  label1.setAttribute("for","choice1")

  buttonsContainer.appendChild(input1)
  buttonsContainer.appendChild(label1)

  const input2 = document.createElement("input")
  input2.type = "radio"
  input2.id = "choice2"
  input2.name = "choice"

  const label2 = document.createElement("label")
  label2.textContent = "Central Process Unit"
  label2.setAttribute("for","choice2")

  buttonsContainer.appendChild(input2)
  buttonsContainer.appendChild(label2)

  const input3 = document.createElement("input")
  input3.type = "radio"
  input3.id = "choice3"
  input3.name = "choice"

  const label3 = document.createElement("label")
  label3.textContent = "Computer Personal Unit"
  label3.setAttribute("for","choice3")

  buttonsContainer.appendChild(input3)
  buttonsContainer.appendChild(label3)

  const input4 = document.createElement("input")
  input4.type = "radio"
  input4.id = "choice4"
  input4.name = "choice"

  const label4 = document.createElement("label")
  label4.textContent = "Central Processor Unit"
  label4.setAttribute("for","choice4")

  buttonsContainer.appendChild(input4)
  buttonsContainer.appendChild(label4)

  const submit = document.createElement("input")
  submit.type = "submit"
  submit.id = "submit"

  document.body.appendChild(submit)


  const send = document.getElementById("submit")
  send.addEventListener("click", function() {
    if (input1.checked || input2.checked || input3.checked || input4.checked) {
      if(input1.checked){         //risposta corretta impostata a mano
        punteggioUtente++
      }
        svuotaPagina()
        domandaDue()
        console.log(punteggioUtente)
    } else {
        alert("Seleziona una risposta prima di procedere")
    }  
  })
}



function domandaDue(){
  const divLogo = document.createElement("div")
  divLogo.id = "logoTimer"
  document.body.appendChild(divLogo)

  const containerLogo = document.getElementById("logoTimer")
  const logo = document.createElement("img")
  logo.src = "assets/epicode_logo.png"
  containerLogo.appendChild(logo)

  const containerTimer = document.getElementById("logoTimer")
  const timer = document.createElement("div")
  timer.id = "timer"
  timer.textContent = "25";
  containerTimer.appendChild(timer);
  const timerDisplay = document.getElementById('timer')

  let seconds = 25
  
      function countdown(){
        seconds--
        timerDisplay.textContent = seconds;
        if(seconds === 0){
          alert ("tempo scaduto")
          svuotaPagina()
          domandaTre()
        } return
      }
      setInterval(countdown, 1000)

  const title = document.createElement("h1")
  title.textContent = "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?"
  document.body.appendChild(title)

  const buttonsContainer = document.createElement("div")
  buttonsContainer.id = "buttonsContainer"
  document.body.appendChild(buttonsContainer)

  const input1 = document.createElement("input")
  input1.type = "radio"
  input1.id = "choice1"
  input1.name = "choice"

  const label1 = document.createElement("label")
  label1.textContent = "Final"
  label1.setAttribute("for","choice1")

  buttonsContainer.appendChild(input1)
  buttonsContainer.appendChild(label1)

  const input2 = document.createElement("input")
  input2.type = "radio"
  input2.id = "choice2"
  input2.name = "choice"

  const label2 = document.createElement("label")
  label2.textContent = "Static"
  label2.setAttribute("for","choice2")

  buttonsContainer.appendChild(input2)
  buttonsContainer.appendChild(label2)

  const input3 = document.createElement("input")
  input3.type = "radio"
  input3.id = "choice3"
  input3.name = "choice"

  const label3 = document.createElement("label")
  label3.textContent = "Private"
  label3.setAttribute("for","choice3")

  buttonsContainer.appendChild(input3)
  buttonsContainer.appendChild(label3)

  const input4 = document.createElement("input")
  input4.type = "radio"
  input4.id = "choice4"
  input4.name = "choice"

  const label4 = document.createElement("label")
  label4.textContent = "Public"
  label4.setAttribute("for","choice4")

  buttonsContainer.appendChild(input4)
  buttonsContainer.appendChild(label4)

  const submit = document.createElement("input")
  submit.type = "submit"
  submit.id = "submit"

  document.body.appendChild(submit)
  
}



function domandaTre(){
  const divLogo = document.createElement("div")
  divLogo.id = "logoTimer"
  document.body.appendChild(divLogo)

  const containerLogo = document.getElementById("logoTimer")
  const logo = document.createElement("img")
  logo.src = "assets/epicode_logo.png"
  containerLogo.appendChild(logo)

  const containerTimer = document.getElementById("logoTimer")
  const timer = document.createElement("div")
  timer.id = "timer"
  timer.textContent = "25";
  containerTimer.appendChild(timer);
  const timerDisplay = document.getElementById('timer')

  let seconds = 25
  
      function countdown(){
        seconds--
        timerDisplay.textContent = seconds;
        if(seconds === 0){
          alert ("tempo scaduto")
          svuotaPagina()
        } return
      }
      setInterval(countdown, 1000)

  const title = document.createElement("h1")
  title.textContent = "The logo for Snapchat is a Bell."
  document.body.appendChild(title)

  const buttonsContainer = document.createElement("div")
  buttonsContainer.id = "buttonsContainer"
  document.body.appendChild(buttonsContainer)

  const input1 = document.createElement("input")
  input1.type = "radio"
  input1.id = "choice1"
  input1.name = "choice"

  const label1 = document.createElement("label")
  label1.textContent = "True"
  label1.setAttribute("for","choice1")

  buttonsContainer.appendChild(input1)
  buttonsContainer.appendChild(label1)

  const input2 = document.createElement("input")
  input2.type = "radio"
  input2.id = "choice2"
  input2.name = "choice"

  const label2 = document.createElement("label")
  label2.textContent = "False"
  label2.setAttribute("for","choice2")

  buttonsContainer.appendChild(input2)
  buttonsContainer.appendChild(label2)

  const submit = document.createElement("input")
  submit.type = "submit"
  submit.id = "submit"

  document.body.appendChild(submit)
  
}

