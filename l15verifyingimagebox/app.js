// Get UI
const database = [
  {
    question: "Choose Traffic Light ?",
    a: "./img/traffic.jpg",
    b: "./img/mountain.jpg",
    c: "./img/ambulance.jpg",
    d: "./img/airport.jpg",
    correctAnswer: "a",
  },
  {
    question: "Choose Mountain ?",
    a: "./img/ambulance.jpg",
    b: "./img/mountain.jpg",
    c: "./img/traffic.jpg",
    d: "./img/airport.jpg",
    correctAnswer: "b",
  },
  {
    question: "Choose Ambulance Truck ?",
    a: "./img/ambulance.jpg",
    b: "./img/airport.jpg",
    c: "./img/traffic.jpg",
    d: "./img/mountain.jpg",
    correctAnswer: "a",
  },
  {
    question: "Choose Airport ?",
    a: "./img/traffic.jpg",
    b: "./img/mountain.jpg",
    c: "./img/ambulance.jpg",
    d: "./img/airport.jpg",
    correctAnswer: "d",
  },
];

// console.log(database);
// console.log(database[0].b);

const getContainer = document.querySelector(".container");
const getQuestion = document.querySelector(".question");
const getInputs = document.querySelectorAll(".answer"); // NodeList

const geta_img = document.getElementById("a_img"),
  getb_img = document.getElementById("b_img"),
  getc_img = document.getElementById("c_img"),
  getd_img = document.getElementById("d_img");

const getBtn = document.querySelector(".btn");

let currentIdx = 0;
let score = 0;

startQuestion();

function startQuestion() {
  removeSelected();

  const currentQes = database[currentIdx];

  getQuestion.textContent = currentQes.question;
  geta_img.src = currentQes.a;
  getb_img.src = currentQes.b;
  getc_img.src = currentQes.c;
  getd_img.src = currentQes.d;
}

function getSingleInput() {
  let answer;

  getInputs.forEach(function (getInput) {
    // console.log(getInput);
    // console.log(getInput.id);

    if (getInput.checked) {
      // console.log(getInput.id);
      answer = getInput.id;
    }
  });

  // console.log(answer);
  return answer;
}

getBtn.addEventListener("click", function () {
  // console.log("I'm working");

  const getAnswer = getSingleInput();
  // console.log(getAnswer);

  if (getAnswer) {
    // Question 0
    // currentIdx 0
    if (getAnswer === database[currentIdx].correctAnswer) {
      score++;
    }

    currentIdx++;
    // console.log(currentIdx);

    // Question 1
    if (currentIdx < database.length) {
      startQuestion();
    } else {
      // console.log(score);

      getContainer.innerHTML = `
        <h3>Total Score: ${score * 25}</h3>
        <h4>You answered correctly at ${score}/${database.length}</h4>

        <!-- 
        <button type="button" class="btn" ondblclick="window.location.reload()">Double Click to Reload</button>
        -->

        <button type="button" class="btn" onclick="doubleclick()">Double Click to Reload</button>
      `;
    }
  } else {
    alert("Choose one answer");
  }
});

function removeSelected() {
  getInputs.forEach(function (getInput) {
    return (getInput.checked = false);
  });
}

let clicktimes = 0;
function doubleclick() {
  // console.log("Hey");

  // console.log(clicktimes);

  if (clicktimes === 0) {
    clicktimes = Date.now();
    // console.log(clicktimes);
  } else {
    if (Date.now() - clicktimes < 1000) {
      window.location.reload();
      clicktimes = 0;
    } else {
      clicktimes = Date.now();
    }
  }
}

// 1DB
