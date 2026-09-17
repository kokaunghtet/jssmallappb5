// GetUI
let getForm = document.getElementById("form");
let getTextBox = document.getElementById("textBox");
let getUl = document.getElementById("list-group");

getTextBox.focus();

getForm.addEventListener("submit", (e) => {
  // console.log("Hey");
  addNew();

  e.preventDefault();
});

let getTodos = JSON.parse(localStorage.getItem("todos"));
// console.log(getTodos);

if (getTodos) {
  getTodos.forEach((gettodo) => addNew(gettodo));
}

function addNew(todo) {
  let todoText = getTextBox.value;
  // console.log(todoText);

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const li = document.createElement("li"); // create new <li>

    if (todo && todo.done) {
      li.classList.add("completed");
    }

    li.appendChild(document.createTextNode(todoText)); // add text to <li>
    // console.log(li);
    getUl.appendChild(li); // add created new <li> to <ul>
    getTextBox.value = "";
    getTextBox.focus();

    updatelocalstorage();

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
      updatelocalstorage();
    });

    li.addEventListener("contextmenu", function (e) {
      li.remove();
      updatelocalstorage();
      e.preventDefault();
    });
  }
}

function updatelocalstorage() {
  let getalllis = document.querySelectorAll("li");

  // console.log(getalllis);

  const todos = [];

  getalllis.forEach((getallli) => {
    // console.log(getallli.textContent);

    todos.push({
      text: getallli.textContent,
      done: getallli.classList.contains("completed"), // false
    });
  });

  // console.log(todos);

  localStorage.setItem("todos", JSON.stringify(todos));
}

// email
