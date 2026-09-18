// GET UI

const CHECK_BOX = document.getElementById("toggle-checkbox");
const CHECK_LABEL = document.getElementById("toggle-label");
const BASIC_PRICE = document.getElementById("basic"),
  PRO_PRICE = document.getElementById("pro"),
  MASTER_PRICE = document.getElementById("mst");

// CHECK_BOX.addEventListener("click", function () {
//   // console.log("hi");

//   if (CHECK_BOX.checked) {
//     console.log("yes");
//     BASIC_PRICE.textContent = 120;
//     PRO_PRICE.textContent = 240;
//     MASTER_PRICE.textContent = 360;
//   } else {
//     console.log("no");
//     // BASIC_PRICE.textContent = 10;
//     // PRO_PRICE.textContent = 20;
//     // MASTER_PRICE.textContent = 30;

//     [BASIC_PRICE.textContent, PRO_PRICE.textContent, MASTER_PRICE.textContent] = [
//       10, 20, 30,
//     ];
//   }
// });

CHECK_LABEL.addEventListener("click", function () {
  // console.log("hi");
  // console.log("no");
  // BASIC_PRICE.textContent = 10;
  // PRO_PRICE.textContent = 20;
  // MASTER_PRICE.textContent = 30;

  [BASIC_PRICE.textContent, PRO_PRICE.textContent, MASTER_PRICE.textContent] = [
    10, 20, 30,
  ];

  if (CHECK_BOX.checked) {
  } else {
    console.log("yes");
    BASIC_PRICE.textContent = 120;
    PRO_PRICE.textContent = 240;
    MASTER_PRICE.textContent = 360;
  }
});
