// 8 September

// get UI
const PROGRESS_BAR = document.getElementById("progress-bar");

window.onscroll = function () {
  // console.log("hi");
  scrollPoint();
};

function scrollPoint() {
  let getScrollTop = document.documentElement.scrollTop;
  // console.log(getScrollTop); // 0 to 1473 (depend on screen size)

  let getClientHeight = document.documentElement.clientHeight;
  // console.log(getClientHeight); // 700 (depend on screen size) (the size of scrollbar)

  let getScrollHeight = document.documentElement.scrollHeight;
  // console.log(getScrollHeight); // 2174 (depend on screen size)

  let calcHeight = getScrollHeight - getClientHeight;
  // console.log(calcHeight); // 1474 (depend on screen size)

  // let getFinal = Math.floor(getScrollTop * 100 / calcHeight);
  let getFinal = Math.ceil((getScrollTop / calcHeight) * 100);
  console.log(getFinal);

  PROGRESS_BAR.style.width = `${getFinal}%`;
}

function printMe() {
  window.print();
}
