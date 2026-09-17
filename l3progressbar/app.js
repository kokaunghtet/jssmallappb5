// 29 September

const DOWNLOAD_BTN = document.querySelector(".download-btn");
const PROGRESS_BAR = document.querySelector(".progress-bar");
const URL_LINK = "https://google.com";

DOWNLOAD_BTN.addEventListener("click", function (e) {
  let setWidth = 0;

  let setInv = setInterval(progressInc, 30);

  function progressInc() {
    if (setWidth >= 100) {
      // setWidth = 0;
      clearInterval(setInv);

      // window.location.href = setUrl;
      window.location.href = "https://google.com";
    } else {
      setWidth++;
      PROGRESS_BAR.style.width = `${setWidth}%`;
      PROGRESS_BAR.setAttribute("data-inc", `${setWidth}%`);

      DOWNLOAD_BTN.setAttribute("disabled", true);
    }

    // console.log(setWidth); //will not be able see no. in console if we write inside the scope
  }

  // console.log(setWidth); //will be able to see no. in console if we write this outside the scope
});
