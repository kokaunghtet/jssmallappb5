// Get UI
const getContainer = document.querySelector(".container");
const getVideoScreen = document.getElementById("videoscreen");
const playBtn = document.getElementById("play"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  stopBtn = document.getElementById("stop");
const getProgress = document.getElementById("progress"),
  getProgressBar = document.getElementById("progress-bar");
const getDisplayTime = document.getElementById("displaytime");
const getTitle = document.getElementById("title");
const getOpenFullscreen = document.querySelector(".openfullscreen"),
  getCloseFullscreen = document.querySelector(".closefullscreen");

const videos = ["samplevideo1", "samplevideo2"];
let currIdx = 0;

loadVideo(videos[currIdx]);

function loadVideo(video) {
  getVideoScreen.src = `./source/${video}.mp4`;
  getTitle.textContent = video;
}

function playVideo() {
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  getVideoScreen.play();
}

function pauseVideo() {
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");

  getVideoScreen.pause();
}

function playPauseVideo() {
  if (getVideoScreen.paused) {
    playVideo();
  } else {
    pauseVideo();
  }
}

function nextVideo() {
  currIdx += 1;

  if (currIdx > videos.length - 1) {
    currIdx = 0;
  }

  loadVideo(videos[currIdx]);
  playVideo();
}

function previousVideo() {
  currIdx -= 1;

  if (currIdx < 0) {
    currIdx = videos.length - 1;
  }

  loadVideo(videos[currIdx]);
  playVideo();
}

function stopVideo() {
  getVideoScreen.currentTime = 0;
  pauseVideo();
}

function updateProgress(e) {
  // const currentTime = e.target.currentTime;
  // const duration = e.target.duration;
  // console.log(currentTime, duration);

  // const { currentTime } = e.target;
  // const { duration } = e.target;
  // console.log(currentTime, duration);

  // const { currentTime, duration } = e.target;
  // console.log(currentTime, duration);

  // const [currentTime, duration] = [e.target.currentTime, e.target.duration];
  // console.log(currentTime, duration);

  const [currentTime, duration] = [e.target.currentTime, e.srcElement.duration];
  // console.log(currentTime, duration);

  if (currentTime === 0) {
    getProgressBar.style.width = `0%`;
  } else {
    let progressPercent = (currentTime / duration) * 100;
    getProgressBar.style.width = `${progressPercent}%`;
  }

  getMins = Math.floor(getVideoScreen.currentTime / 60);
  getSecs = Math.floor(getVideoScreen.currentTime % 60);

  // if (getMins < 10) {
  //   getMins = "0" + getMins;
  //   // getMins = "0" + String(getMins);
  // }

  // if (getSecs < 10) {
  //   // getSecs = "0" + getSecs;
  //   getSecs = "0" + String(getSecs);
  // }

  let minValue = getMins.toString().padStart(2, "0");
  let secValue = getSecs.toString().padStart(2, "0");
  // console.log(minValue, secValue);

  getDisplayTime.innerText = `${minValue}:${secValue}`;
}

function setProgress(e) {
  const clientWidth = e.target.clientWidth;
  const clickX = e.offsetX;
  const duration = getVideoScreen.duration;
  // console.log(clickX, clientWidth, duration);

  getVideoScreen.currentTime = (clickX / clientWidth) * duration;
}

function openFullscreen() {
  if (getContainer.requestFullscreen) {
    getContainer.requestFullscreen();
  } else if (getContainer.mozRequestFullscreen) {
    getContainer.mozRequestFullscreen();
  } else if (getContainer.webkitRequestFullscreen) {
    getContainer.webkitRequestFullscreen();
  } else if (getContainer.msRequestFullscreen) {
    getContainer.msRequestFullscreen();
  }

  getOpenFullscreen.style.display = "none";
  getCloseFullscreen.style.display = "inline-block";
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullscreen) {
    document.mozCancelFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  getCloseFullscreen.style.display = "none";
  getOpenFullscreen.style.display = "inline-block";
}

getVideoScreen.addEventListener("timeupdate", updateProgress);
getVideoScreen.addEventListener("ended", nextVideo);
playBtn.addEventListener("click", playPauseVideo);
nextBtn.addEventListener("click", nextVideo);
prevBtn.addEventListener("click", previousVideo);
stopBtn.addEventListener("click", stopVideo);
getProgress.addEventListener("click", setProgress);
getOpenFullscreen.addEventListener("click", openFullscreen);
getCloseFullscreen.addEventListener("click", closeFullscreen);

// 5VD
