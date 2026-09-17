// Get UI

let getModalBtn = document.getElementById("modal-btn"),
  getModalBox = document.getElementById("login-modal"),
  getBtnClose = document.querySelector(".btn-close");

// getModalBtn.addEventListener("click", function () {
//   getModalBox.style.display = "block";
// });

// getBtnClose.addEventListener("click", function () {
//   getModalBox.style.display = "none";
// });

getModalBtn.addEventListener("click", openModal);
getBtnClose.addEventListener("click", closeModal);

function openModal() {
  getModalBox.style.display = "block";
}
function closeModal() {
  getModalBox.style.display = "none";
}

window.onclick = function (e) {
  // console.log(e.target);

  if (e.target === getModalBox) {
    closeModal();
    // getModalBox.style.display = "none";
  }
};

// 10MB
