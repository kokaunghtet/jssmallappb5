// GetUI

var getform = document.getElementById("form");
var gettextbox = document.getElementById("textbox");
var getul = document.getElementById("list-group");

gettextbox.focus();

getform.addEventListener("submit", (e) => {
  // console.log("Hey");
  addnew();

  e.preventDefault();
});

var gettodos = JSON.parse(localStorage.getItem("todos"));
// console.log(gettodos);

if (gettodos) {
  gettodos.forEach((gettodo) => addnew(gettodo));
}

function addnew(todo) {
  let todotext = gettextbox.value;
  // console.log(todotext);

  if (todo) {
    todotext = todo.text;
  }

  if (todotext) {
    const li = document.createElement("li");

    if (todo && todo.done) {
      li.classList.add("completed");
    }

    li.appendChild(document.createTextNode(todotext));
    // console.log(li);
    getul.appendChild(li);
    gettextbox.value = "";
    gettextbox.focus();

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
  var getalllis = document.querySelectorAll("li");

  // console.log(getalllis);

  const todos = [];

  getalllis.forEach((getallli) => {
    // console.log(getallli.textContent);

    todos.push({
      text: getallli.textContent,
      done: getallli.classList.contains("completed"), // false
    });
  });

  console.log(todos);

  localStorage.setItem("todos", JSON.stringify(todos));
}

// email
