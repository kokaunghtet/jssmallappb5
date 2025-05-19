// Get UI
const getcontainer = document.querySelector(".container");
const getvideoscreen = document.getElementById("videoscreen");
const playbtn = document.getElementById("play"),
  prevbtn = document.getElementById("prev"),
  nextbtn = document.getElementById("next"),
  stopbtn = document.getElementById("stop");
const getprogress = document.getElementById("progress"),
  getprogressbar = document.getElementById("progress-bar");
const getdisplaytime = document.getElementById("displaytime");
const gettitle = document.getElementById("title");
const getopenfullscreen = document.querySelector(".openfullscreen"),
  getclosefullscreen = document.querySelector(".closefullscreen");

const videos = ["samplevideo1", "samplevideo2"];
let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(video) {
  getvideoscreen.src = `./source/${video}.mp4`;
  gettitle.textContent = video;
}

function playvideo() {
  playbtn.querySelector("i.fas").classList.remove("fa-play");
  playbtn.querySelector("i.fas").classList.add("fa-pause");

  getvideoscreen.play();
}

function pausevideo() {
  playbtn.querySelector("i.fas").classList.remove("fa-pause");
  playbtn.querySelector("i.fas").classList.add("fa-play");

  getvideoscreen.pause();
}

function playpausevideo() {
  if (getvideoscreen.paused) {
    playvideo();
  } else {
    pausevideo();
  }
}

function nextvideo() {
  curridx += 1;

  if (curridx > videos.length - 1) {
    curridx = 0;
  }

  loadvideo(videos[curridx]);
  playvideo();
}

function previousvideo() {
  curridx -= 1;

  if (curridx < 0) {
    curridx = videos.length - 1;
  }

  loadvideo(videos[curridx]);
  playvideo();
}

function stopvideo() {
  getvideoscreen.currentTime = 0;
  pausevideo();
}

function updateprogress(e) {
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
    getprogressbar.style.width = `0%`;
  } else {
    let progresspercent = (currentTime / duration) * 100;
    getprogressbar.style.width = `${progresspercent}%`;
  }

  getmins = Math.floor(getvideoscreen.currentTime / 60);
  getsecs = Math.floor(getvideoscreen.currentTime % 60);

  // if (getmins < 10) {
  //   getmins = "0" + getmins;
  //   // getmins = "0" + String(getmins);
  // }

  // if (getsecs < 10) {
  //   // getsecs = "0" + getsecs;
  //   getsecs = "0" + String(getsecs);
  // }

  let minvalue = getmins.toString().padStart(2, "0");
  let secvalue = getsecs.toString().padStart(2, "0");
  // console.log(minvalue, secvalue);

  getdisplaytime.innerText = `${minvalue}:${secvalue}`;
}

function setprogress(e) {
  const getclientWidth = e.target.clientWidth;
  const getclickx = e.offsetX;
  const getduration = getvideoscreen.duration;
  // console.log(getclickx, getclientWidth, getduration);

  getvideoscreen.currentTime = (getclickx / getclientWidth) * getduration;
}

function openfullscreen() {
  if (getcontainer.requestFullscreen) {
    getcontainer.requestFullscreen();
  } else if (getcontainer.mozRequestFullscreen) {
    getcontainer.mozRequestFullscreen();
  } else if (getcontainer.webkitRequestFullscreen) {
    getcontainer.webkitRequestFullscreen();
  } else if (getcontainer.msRequestFullscreen) {
    getcontainer.msRequestFullscreen();
  }

  getopenfullscreen.style.display = "none";
  getclosefullscreen.style.display = "inline-block";
}

function closefullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullscreen) {
    document.mozCancelFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  getclosefullscreen.style.display = "none";
  getopenfullscreen.style.display = "inline-block";
}

getvideoscreen.addEventListener("timeupdate", updateprogress);
getvideoscreen.addEventListener("ended", nextvideo);
playbtn.addEventListener("click", playpausevideo);
nextbtn.addEventListener("click", nextvideo);
prevbtn.addEventListener("click", previousvideo);
stopbtn.addEventListener("click", stopvideo);
getprogress.addEventListener("click", setprogress);
getopenfullscreen.addEventListener("click", openfullscreen);
getclosefullscreen.addEventListener("click", closefullscreen);

// 5VD
