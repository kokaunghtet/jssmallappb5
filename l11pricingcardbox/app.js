// GET UI

const getcheckbox = document.getElementById("toggle-checkbox");
const getchecklabel = document.getElementById("toggle-label");
const getbasic = document.getElementById("basic"),
  getpro = document.getElementById("pro"),
  getmst = document.getElementById("mst");

// getcheckbox.addEventListener("click", function () {
//   // console.log("hi");

//   if (getcheckbox.checked) {
//     console.log("yes");
//     getbasic.textContent = 120;
//     getpro.textContent = 240;
//     getmst.textContent = 360;
//   } else {
//     console.log("no");
//     // getbasic.textContent = 10;
//     // getpro.textContent = 20;
//     // getmst.textContent = 30;

//     [getbasic.textContent, getpro.textContent, getmst.textContent] = [
//       10, 20, 30,
//     ];
//   }
// });

getchecklabel.addEventListener("click", function () {
  // console.log("hi");
  console.log("no");
  // getbasic.textContent = 10;
  // getpro.textContent = 20;
  // getmst.textContent = 30;

  [getbasic.textContent, getpro.textContent, getmst.textContent] = [10, 20, 30];

  if (getcheckbox.checked) {
  } else {
    console.log("yes");
    getbasic.textContent = 120;
    getpro.textContent = 240;
    getmst.textContent = 360;
  }
});
