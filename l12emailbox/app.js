// GET UI

const EMAIL_INPUT_BOX = document.getElementById("emails");
const TEXTAREA = document.querySelector("textarea");
const SEND_BTN = document.querySelector(".btn");
const EMAIL_CONTAINER = document.querySelector(".email-container");

EMAIL_INPUT_BOX.focus();

EMAIL_INPUT_BOX.addEventListener("keyup", function () {
  // console.log(e.target.value);
  // console.log(this.value);

  createEmailList(this.value);
});

function createEmailList(inputText) {
  // console.log(inputText);

  // split by (',')
  // const EMAIL_TEXT = inputText.split(",");
  // console.log(EMAIL_TEXT);

  // remove empty, space
  // const EMAIL_TEXT = inputText
  //   .split(",")
  //   .filter((rmempty) => rmempty.trim() !== "");
  // console.log(EMAIL_TEXT);

  // remove space in text
  const EMAIL_TEXT = inputText // apple,banana , , orange ,
    .split(",") // ['apple', 'banana ', '', ' orange'];
    .filter((item) => item.trim() !== "") // ['apple', 'banana ', ' orange'];
    .map((item) => item.trim()); // ['apple', 'banana', 'orange'];
  // console.log(EMAIL_TEXT);

  EMAIL_CONTAINER.innerHTML = "";

  EMAIL_TEXT.forEach(function (eitem) {
    // console.log(eitem);

    let setnewspan = document.createElement("span");
    setnewspan.textContent = eitem;
    setnewspan.classList.add("email-item");
    // console.log(setnewspan);
    EMAIL_CONTAINER.appendChild(setnewspan);
  });
}

SEND_BTN.addEventListener("click", function (e) {
  e.preventDefault();
  sendEmail();
});

function sendEmail() {
  const ADDRESSES = document.querySelectorAll(".email-item");
  const TEXT_VALUE = TEXTAREA.value;
  // console.log(ADDRESSES);
  // console.log(TEXT_VALUE);

  let persons = [];

  if (ADDRESSES.length > 0 && TEXT_VALUE) {
    ADDRESSES.forEach(function (getaddress) {
      persons.push({
        email: getaddress.textContent,
        message: TEXT_VALUE,
      });
    });
    console.log(persons);
  } else {
    window.alert("Enter Message");
    TEXTAREA.focus();
  }
}
