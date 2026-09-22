// Get UI
const getAudioScreen = document.getElementById("audioScreen");
const playBtn = document.getElementById("play"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  stopBtn = document.getElementById("stop");
const getProgress = document.getElementById("progress"),
  getProgressBar = document.getElementById("progress-bar");
const getVolumneProgress = document.getElementById("volumeProgress");
const getDisplayTime = document.getElementById("displayTime");

const audios = ["sample1", "sample2", "sample3"];

let currentIndex = 0;
// console.log(audios[currentIndex]); // sample1

// loadAudio(audios[currentIndex]);

function loadAudio(audio) {
  getAudioScreen.src = `./source/${audio}.mp3`;
}

function playAudio() {
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  getAudioScreen.play(); // default function
}

function pauseAudio() {
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");

  getAudioScreen.pause(); // default function
}

function playAndPauseAudio() {
  // paused default keyword for audio/video
  if (getAudioScreen.paused) {
    getAudioScreen.play();
  } else {
    getAudioScreen.pause();
  }
}

function nextAudio() {
  currentIndex++;

  // 0 1 2             3-1 = 2
  if (currentIndex > audios.length - 1) {
    currentIndex = 0;
  }

  // console.log(currentIndex);

  loadAudio(audios[currentIndex]);
  playAudio();
}

function prevAudio() {
  currentIndex--;

  // 0 1 2
  if (currentIndex < 0) {
    currentIndex = audios.length - 1;
  }

  // console.log(currentIndex);

  loadAudio(audios[currentIndex]);
  playAudio();
}

function updateProgress(e) {
  // console.log(e.target);

  // console.log(e.target.duration);
  // console.log(e.target.currentTime);

  // const getduration = e.target.duration;
  // const getcurrenttime = e.target.currentTime;
  // console.log(getduration, getcurrenttime);

  // const { duration } = e.target;
  // const { currentTime } = e.target;
  // console.log(duration, currentTime);

  const { duration, currentTime } = e.target;
  // console.log(duration, currentTime);

  if (currentTime === 0) {
    getProgressBar.style.width = "0%";
  } else {
    const progresspercent = (currentTime / duration) * 100;
    // console.log(progresspercent);

    getProgressBar.style.width = `${progresspercent}%`;
  }

  // // forward
  // const mins = Math.floor(currentTime / 60);
  // const secs = Math.floor(currentTime % 60);

  // backward
  const mins = Math.floor((duration - currentTime) / 60);
  const secs = Math.floor((duration - currentTime) % 60);
  // console.log(typeof mins); // number

  const minutevalue = mins.toString().padStart(2, "0"); // if u use padStart() concat number must be string.
  // console.log(minutevalue);
  const secondvalue = secs.toString().padStart(2, "0");

  getDisplayTime.innerText = `${minutevalue}:${secondvalue}`;
}

function stopAudio() {
  getAudioScreen.currentTime = 0;
  getProgressBar.style.width = `0%`;

  pauseAudio();
}

function volumeControl() {
  // console.log(getVolumneProgress.value);
  // console.log(getAudioScreen.volume); // 1

  // volume default key from audio/video
  getAudioScreen.volume = getVolumneProgress.value / 100;

  // 1 is default (100%)
  // 0.5 half valume (50%)
  // 0 is mute (0%)
}

function progressAudioClick(e) {
  // console.log(e.target);
  // console.log(this);

  const width = this.clientWidth;
  // console.log(width);

  const clickx = e.offsetX;
  // console.log(clickx);

  const getduration = getAudioScreen.duration;
  // console.log(getduration);

  getAudioScreen.currentTime = (clickx / width) * getduration;
  console.log(getAudioScreen.currentTime);
}

getAudioScreen.addEventListener("timeupdate", updateProgress);
getAudioScreen.addEventListener("play", playAudio);
getAudioScreen.addEventListener("pause", pauseAudio);

playBtn.addEventListener("click", playAndPauseAudio);
nextBtn.addEventListener("click", nextAudio);
prevBtn.addEventListener("click", prevAudio);
stopBtn.addEventListener("click", stopAudio);
getVolumneProgress.addEventListener("click", volumeControl);
getProgress.addEventListener("click", progressAudioClick);

// 29AD
