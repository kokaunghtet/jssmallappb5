// Get UI
let getModal = document.querySelector(".modal");
let getModalImg = document.querySelector(".modal-img");
let getCaption = document.querySelector(".caption");
let getBtnClose = document.querySelector(".btn-close");

function showNow(ele) {
  // console.log(ele);
  // console.log(ele.target);
  // console.log(ele.target.src);
  // console.log(ele.target.alt);

  getModal.style.display = "block";
  getModalImg.src = ele.target.src;
  getCaption.textContent = ele.target.alt;
}

// getBtnClose.addEventListener("click", function () {
//   getModal.style.display = "none";
// });

getBtnClose.onclick = function () {
  getModal.style.display = "none";
};

document.addEventListener("click", function (e) {
  // console.log(e.target);

  if (e.target === getModal) {
    getModal.style.display = "none";
  }
});
