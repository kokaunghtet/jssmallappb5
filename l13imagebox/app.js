// Get UI
const getimgboxes = document.querySelectorAll(".imgbox");
// console.log(getimgbox);

getimgboxes.forEach(function (getimgbox, idx) {
  // console.log(getimgbox);

  getimgbox.addEventListener("click", function (e) {
    // console.log(this);
    // console.log(idx);

    showbox(idx);
  });
});

function showbox(idx) {
  // console.log(`from parameter = ${idx}`);

  getimgboxes.forEach(function (getimgbox, curidx) {
    // console.log(`current id = ${curidx}`);

    if (idx === curidx) {
      getimgbox.classList.add("show");

      getimgbox.addEventListener("click", function (e) {
        // console.log(e.target);

        if (e.target.className === "btn-close") {
          // console.log("hi");
          getimgbox.classList.remove("show");
        }

        if (e.target.classList.contains("btn")) {
          // console.log("Hey");

          // const getsubbtn = getimgboxes[idx].querySelector(".btn");
          const getsubbtn = getimgbox.querySelector(".btn");
          getsubbtn.textContent = "Subscribed";
          getsubbtn.style.backgroundColor = "grey";
        }
      });
    } else {
      getimgbox.classList.remove("show");
    }
  });
}
