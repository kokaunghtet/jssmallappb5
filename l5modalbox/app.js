// GET UI
var getsignupbutton = document.getElementById("signup-btn"),
  getfullscreenbtn = document.getElementById("fullscreen-btn"),
  getclsfullscreenbtn = document.getElementById("clsfullscreen-btn");

var getmodal = document.getElementById("signup-modal"),
  getbtnclose = document.querySelector(".btn-close");

getsignupbutton.addEventListener("click", function (e) {
  getmodal.style.display = "block";
});

getbtnclose.addEventListener("click", function () {
  getmodal.style.display = "none";
});

window.onclick = function (e) {
  // console.log(e.target);

  if (e.target === getmodal) {
    getmodal.style.display = "none";
  }
};

console.log(document);
console.log(document.documentElement);

var getdocele = document.documentElement;

getfullscreenbtn.addEventListener("click", function () {
  if (getdocele.requestFullscreen) {
    getdocele.requestFullscreen();
  } else if (getdocele.webkitRequestFullscreen) {
    getdocele.webkitrequestFullscreen();
  } else if (getdocele.msRequestFullscreen) {
    getdocele.msRequestFullscreen();
  }

  getclsfullscreenbtn.style.display = "inline-block";
});

getclsfullscreenbtn.addEventListener("click", function () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  getclsfullscreenbtn.style.display = "none";
});

// 27MD
