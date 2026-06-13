const videoElement = document.getElementById("video-screen");

// Select DOM elements
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const videoScreen = document.getElementById('video-screen');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');


const videos = [
  {
    title: "Video 1",
    artist: "Creator One",
    src: "./video1.mp4"
  },

  {
    title: "Video 2",
    artist: "Creator Two",
    src: "./video2.mp4"
  },

  {
    title: "Video 3",
    artist: "Creator Three",
    src: "./video3.mp4"
  },

  {
    title: "Video 4",
    artist: "Creator Four",
    src: "./video4.mp4"
  }

];


let videoIndex = 0;
let isPlaying = false;
let speed = 1;


function loadVideo(video) {
  title.textContent = video.title;
  artist.textContent = video.artist;
  videoElement.src = video.src;
  videoScreen.src = video.src;
}

loadVideo(videos[videoIndex]);

function playVideo() {
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");
  videoElement.play();
  videoScreen.play();
  isPlaying = true;
}


function pauseVideo() {
  playBtn.querySelector("i").classList.remove("fa-pause");
  playBtn.querySelector("i").classList.add("fa-play");
  videoElement.pause();
  videoScreen.pause();
  isPlaying = false;
}


function nextVideo() {
  pauseVideo();
  setTimeout(() => {
    videoIndex++;
    if (videoIndex > videos.length - 1) {
      videoIndex = 0;
    }
    loadVideo(videos[videoIndex]);
    playVideo();
  }, 300);
}


function prevVideo() {
  pauseVideo();
  setTimeout(() => {
    videoIndex--;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    }
    loadVideo(videos[videoIndex]);
    playVideo();

  }, 300);
}


function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  if (isNaN(duration)) return;
  
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const durationMinutes = Math.floor(duration / 60);
  let durationSeconds = Math.floor(duration % 60);

  if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }

  durationEl.textContent =
    `${durationMinutes}:${durationSeconds}`;


  const currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);

  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }

  currentTimeEl.textContent =
    `${currentMinutes}:${currentSeconds}`;

  videoElement.playbackRate = speed;
  videoScreen.playbackRate = speed;
}


function setProgress(e) {

  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = videoElement.duration;

  if (isNaN(duration)) return;

  const newTime = (clickX / width) * duration;

  if (isFinite(newTime)) {
    videoElement.currentTime = newTime;
    videoScreen.currentTime = newTime;
  }

}


// EVENTS

playBtn.addEventListener("click", () => {

  if (isPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
});


prevBtn.addEventListener("click", prevVideo);
nextBtn.addEventListener("click", nextVideo);

videoElement.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

volumeSlider.addEventListener("input", (e) => {
  videoElement.volume = e.target.value;
  videoScreen.volume = e.target.value;
});

speedSelect.addEventListener("change", (e) => {
  speed = parseFloat(e.target.value);

  videoElement.playbackRate = speed;
  videoScreen.playbackRate = speed;
});

videoElement.addEventListener("loadedmetadata", updateProgress);