// UI
const minNum = document.querySelector(".minNumber"),
  maxNum = document.querySelector(".maxNumber"),
  getInput = document.querySelector("#guessNumber"),
  getBtn = document.querySelector("#btn"),
  message1 = document.querySelector(".message1"),
  message2 = document.querySelector(".message2"),
  getGame = document.getElementById("game");

const getmicbtn = document.getElementById("mic-btn");
const getvocctn = document.getElementById("voice-container");

const min = 10,
  max = 30,
  winningNum = randomnum(min, max);
// winningNum = 5;

let gameleft = 3;

minNum.innerHTML = min;
maxNum.innerHTML = max;

// For Chrome Browser Support
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition();

getmicbtn.addEventListener("click", function () {
  // console.log("I am working");
  // console.log(getrec);

  // start() default function from Recognition api
  getrec.start();

  // getrec.addEventListener("result", function (e) {
  //   talking(e);
  // });
  getrec.addEventListener("result", (e) => talking(e));
});

function talking(ele) {
  // console.log(ele);
  // console.log(ele.results[0][0].transcript);
  const micresult = ele.results[0][0].transcript;
  // console.log(micresult);

  micmessage(micresult);
  getnumber(micresult);
}

function micmessage(msg) {
  getvocctn.innerHTML = `<span>Did you say "${msg}" ?</span>`;
}

function getnumber(msg) {
  const getnum = +msg;
  // console.log(getnum);
  // console.log(typeof getnum);

  // console.log("abcd");
  if (Number.isNaN(getnum)) {
    getvocctn.innerHTML = `<div style="color:red">This is not a valid number!</div>`;
    return false;
  }
  // console.log("efg");

  getInput.value = getnum;

  // stop() default function from Recognition api
  getrec.stop();
}

getBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("Hey, I'm working");
  // console.log(getInput.value);
  // console.log(typeof getInput.value); //string

  // let guess = Number(getInput.value);
  // let guess = +getInput.value;
  let guess = parseInt(getInput.value);
  // console.log(guess, typeof guess); //number

  if (guess < min || guess > max) {
    // console.log(`Please enter a number beetween ${min} and ${max}`);
    // message2.textContent = `Please enter a number beetween ${min} and ${max}`;

    setMessage2(`Please enter a number beetween ${min} and ${max}.`, "red");
  } else if (isNaN(guess)) {
    setMessage2(`The input box can't be blank.`, `red`);
  }

  if (guess === winningNum) {
    // Gameover Won
    // ------------
    // console.log("You won");

    // => disabled getInput
    // getInput.disabled = true;

    // => getInput borderColor to green
    // getInput.style.borderColor = "green";

    // => message1
    // message1.textContent = `${winningNum} is correct!! You've won.`;
    // message1.style.color = "green";

    // setMessage1(`${winningNum} is correct!! You've won.`, "green");

    // => play again
    // getBtn.value = "Play Again?";

    gameOver(true, `${winningNum} is correct!! You've won.`);
  } else {
    // gameleft -= 1;
    gameleft--;
    // console.log(gameleft);

    if (gameleft === 0) {
      // Gameover Lose
      // -------------

      // => disabled getInput
      // getInput.disabled = true;

      // => getInput borderColor to green
      // getInput.style.borderColor = "red";

      // => message1
      // message1.textContent = `Game Over! ${winningNum} is the correct number.`;
      // message1.style.color = "red";=>

      // setMessage1(`Game Over! ${winningNum} is the correct number.`, "red");

      // => play again
      // getBtn.value = "Play Again?";

      gameOver(false, `Game Over! ${winningNum} is the correct number.`);
    } else {
      // Continue Game
      // -------------

      // getInput color to red
      getInput.style.borderColor = "red";

      // message1
      setMessage1(`${guess} is not correct! ${gameleft} guesses left.`, "blue");

      // clear getInput value
      getInput.value = "";

      // autofocussing the getInput
      getInput.focus();
    }
  }
});

getGame.addEventListener("mousedown", (e) => {
  // console.log("Hello");

  // console.log(e.target);

  // e.target.classList.contains("playagain");
  if (e.target.className === "btn playagain") {
    // console.log("i am playagain btn");

    window.location.reload();
  }
});

function gameOver(won, msg) {
  let color;

  won === true ? (color = "green") : (color = "red");

  // => disabled getInput
  getInput.disabled = true;

  // => getInput borderColor to green/red
  getInput.style.borderColor = color;

  // => message1
  setMessage1(msg, color);

  // => play again
  getBtn.value = "Play Again?";

  // => Add class
  getBtn.classList.add("playagain");
  // getBtn.className = "btn playagain";
}

// Message
function setMessage1(msg, color) {
  message1.textContent = msg;
  message1.style.color = color;
}

function setMessage2(msg, color) {
  message2.textContent = msg;
  message2.style.color = color;

  setTimeout(() => {
    message2.textContent = "";
  }, 2000);
}

function randomnum(min, max) {
  let getrdm = Math.floor(Math.random() * (max - min) + min);

  return getrdm;
}

console.log(winningNum);

// 3VC
