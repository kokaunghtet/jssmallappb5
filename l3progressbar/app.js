// 29 September

const getDownloadBtn = document.querySelector(".download-btn");
const getProgressBar = document.querySelector(".progress-bar");
const setUrl = "https://google.com";

getDownloadBtn.addEventListener("click", function (e) {
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
      getProgressBar.style.width = `${setWidth}%`;
      getProgressBar.setAttribute("data-inc", `${setWidth}%`);

      getDownloadBtn.setAttribute("disabled", true);
    }

    // console.log(setWidth); //will not be able see no. in console if we write inside the scope
  }

  // console.log(setWidth); //will be able to see no. in console if we write this outside the scope
});
