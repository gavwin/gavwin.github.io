var player = document.getElementById("music"); // id for audio element
var duration; // Duration of audio clip
let btnPlayPause = document.getElementById("btnPlayPause");
let progressBar = document.getElementById("progress-bar");
let emojiBar = document.getElementById("emoji-bar");

let volumeBar = document.getElementById("volume-bar");
//let source = document.getElementById("audioSource");

let source = document.createElement("source");
player.appendChild(source);

let songs = [
  { name: "location", artist: "playboi carti", gif: "https://66.media.tumblr.com/86bb4340a866b9608066f362b297dda3/tumblr_pwx0bxHdHj1y0s372o1_400.gifv" },
  { name: "the less i know the better", artist: "tame impala", gif: "https://thumbs.gfycat.com/SlightDopeyAzurevasesponge-size_restricted.gif" },
  { name: "exchange", artist: "bryson tiller", gif: "https://66.media.tumblr.com/8cb8536e1e1b3150c0235aabe90a9693/tumblr_otmpmhIIqW1vcsrlfo1_500.gifv" },
  { name: "die for you", artist: "the weeknd", gif: "https://media1.tenor.com/images/3d68a3011e01bd40bd509c997ecb8f62/tenor.gif?itemid=13352856" },
  { name: "redbone", artist: "childish gambino", gif: "https://media1.giphy.com/media/igaw7wi3y2hFy8wKwI/giphy.gif" },
  { name: "all the stars", artist: "kendrick lamar & sza", gif: "https://steamuserimages-a.akamaihd.net/ugc/942826282211964937/BF13A84321161C264F83D27F28CF5FB8B9E6B551/" },
  { name: "20 min", artist: "lil uzi vert", gif: "https://media.giphy.com/media/Ejw31fJJkDfQ4/giphy.gif" },
  { name: "love", artist: "kendrick lamar", gif: "https://i.pinimg.com/originals/07/60/8d/07608d3fc48e6d3ccdf6688ec1c0bacb.gif" },
  { name: "flex", artist: "playboi carti", gif: "https://78.media.tumblr.com/5d9ba455934cf6099997253ac2e36538/tumblr_p68k2dPCmh1qc7efmo1_540.gif" }
];

setupPage();

// Add a listener for the timeupdate event so we can update the progress bar
player.addEventListener("timeupdate", updateProgressBar, false);

player.addEventListener("ended", function() {
  setupPage();
  player.load();
  player.play();
}, false);

progressBar.addEventListener("click", seek);

function seek(e) {
  var percent = e.offsetX / this.offsetWidth;
  player.currentTime = percent * player.duration;
  e.target.value = Math.floor(percent / 100);
  e.target.innerHTML = progressBar.value + "% played";
}

// Stop the current media from playing, and return it to the start position
function playPauseAudio() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

// Update the progress bar
function updateProgressBar() {
  // Work out how much of the media has played via the duration and currentTime parameters
  var percentage = Math.floor((100 / player.duration) * player.currentTime);
  // Update the progress bar's value
  progressBar.value = percentage;
  // Update the progress bar's text (for browsers that don't support the progress element)
  progressBar.innerHTML = progressBar.title = percentage + "% played";
}

function setupPage() { 
  let song = songs[Math.floor(Math.random()*songs.length)];
  document.body.style.setProperty("background-image", "url(\"" + song.gif + "\")");
  document.getElementById("songName").innerHTML = "now playing: " + song.artist + " - " + song.name;
  source.setAttribute("src", "assets/audio/" + song.name + ".mp3");
}