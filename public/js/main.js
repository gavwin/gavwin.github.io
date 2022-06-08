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
  { name: "flex", artist: "playboi carti", gif: "https://78.media.tumblr.com/5d9ba455934cf6099997253ac2e36538/tumblr_p68k2dPCmh1qc7efmo1_540.gif" },
  { name: "stargazing", artist: "travis scott", gif: "https://data.whicdn.com/images/329947368/original.gif" },
  { name: "astrothunder", artist: "travis scott", gif: "https://66.media.tumblr.com/30b8549caa67999ce9234673f1104e8e/tumblr_oyw99atg401wqfvrxo1_400.gifv" },
  { name: "falling", artist: "trevor daniel", gif: "https://media1.tenor.com/images/90c72a2b92b988b31f074a3f67a11fe1/tenor.gif?itemid=9177970" },
  { name: "without me", artist: "halsey ft. juice wrld", gif: "https://media1.tenor.com/images/eceada65c15a485ec04f1c83fc9ac714/tenor.gif?itemid=9402415" },
  { name: "workout", artist: "j cole", gif: "https://media.giphy.com/media/M68ca96XBQiCQ/giphy.gif" },
  { name: "molly", artist: "playboi carti", gif: "https://i.pinimg.com/originals/c0/7e/1e/c07e1ec3329400ef1495b31d9e9ddb05.gif" },
  { name: "slow dancing in the dark", artist: "joji", gif: "https://data.whicdn.com/images/292168915/original.gif" },
  { name: "nothin' on you", artist: "b.o.b. & bruno mars", gif: "https://i.pinimg.com/originals/eb/43/ba/eb43ba6e9cda38c585a23fe3d1a79c9b.gif" },
  { name: "had enough", artist: "don toliver, offset & quavo", gif: "https://media2.giphy.com/media/wKnqovL33x9in9ci6X/giphy.gif" },
  { name: "acid trip", artist: "rejjie snow", gif: "https://i.ibb.co/3Y3RG3z/acid.gif" },
  { name: "test & recognize", artist: "seekae & flume", gif: "https://c.tenor.com/k2V7yl0m9I0AAAAC/cidade.gif "},
  { name: "lost souls", artist: "baby keem ft. brent faiyaz", gif: "https://c.tenor.com/LgTXUCpjUkoAAAAC/wandering-soul-lost-soul.gif" },
  { name: "9am in calabasas", artist: "playboi carti [prod. adrian]", gif: "https://64.media.tumblr.com/72e6aa414f2797e0cd6080ac26fd85bb/tumblr_pcsvexSuDs1x0j068o1_500.gifv" },
  { name: "passionfruit", artist: "drake", gif: "https://thumbs.gfycat.com/BrownScornfulGonolek-size_restricted.gif" },
  { name: "16", artist: "baby keem", gif: "https://i.ibb.co/7g863SH/void.gif" }
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

function setCookie(name, value) {
  var cookie = [
    name,
    "",
    JSON.stringify(value)
  ].join('');
  document.cookie = cookie;
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return JSON.parse(
        c.substring(nameEQ.length, c.length)
      );
    }
  }
  return null;
}

function setupPage() { 
  let song = songs[Math.floor(Math.random() * songs.length)]
  if (readCookie("songs").includes(song.name)) return setupPage();
  document.body.style.setProperty("background-image", "url(\"" + song.gif + "\")");
  document.getElementById("songName").innerHTML = "now playing: " + song.artist + " - " + song.name;
  source.setAttribute("src", "public/audio/" + song.name + ".mp3");
  setCookie("songs", song.name);
}