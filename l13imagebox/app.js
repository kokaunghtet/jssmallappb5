// // ORIGINAL VERSION
// // Get UI
// const IMG_BOXES = document.querySelectorAll(".imgbox");
// // console.log(getimgbox);

// IMG_BOXES.forEach(function (box, index) {
//   // console.log(box);

//   box.addEventListener("click", function (e) {
//     // console.log(this);
//     // console.log(index);

//     showBox(index);
//   });
// });

// function showBox(idx) {
//   // console.log(`from parameter = ${idx}`);

//   IMG_BOXES.forEach(function (getimgbox, currentIndex) {
//     // console.log(`current id = ${currentIndex}`);

//     if (idx === currentIndex) {
//       getimgbox.classList.add("show");

//       getimgbox.addEventListener("click", function (e) {
//         // console.log(e.target);

//         if (e.target.className === "btn-close") {
//           // console.log("hi");
//           getimgbox.classList.remove("show");
//         }

//         if (e.target.classList.contains("btn")) {
//           // console.log("Hey");

//           // const getsubbtn = IMG_BOXES[idx].querySelector(".btn");
//           const getsubbtn = getimgbox.querySelector(".btn");
//           getsubbtn.textContent = "Subscribed";
//           getsubbtn.style.backgroundColor = "grey";
//         }
//       });
//     } else {
//       getimgbox.classList.remove("show");
//     }
//   });
// }

// ==============================================

// REFACTORED VERSION
const imgBoxes = document.querySelectorAll(".imgbox");

// Outer click — open the clicked box
imgBoxes.forEach(function (box, index) {
  box.addEventListener("click", function (e) {
    // Close button — remove show
    if (e.target.className === "btn-close") {
      box.classList.remove("show");
      return;
    }

    // Subscribe button — update text and style
    if (e.target.classList.contains("btn")) {
      const subscribeBtn = box.querySelector(".btn");
      subscribeBtn.textContent = "Subscribed";
      subscribeBtn.style.backgroundColor = "grey";
      return;
    }

    // Otherwise — show this box, hide the rest
    showBox(index);
  });
});

function showBox(selectedIndex) {
  imgBoxes.forEach(function (box, currentIndex) {
    if (selectedIndex === currentIndex) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
