var particleNumber = 75;
// number of particles (change it!)


window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();
// requesting the keyframes

var particleCanvas = document.getElementById('particleCanvas');
var ctx = particleCanvas.getContext('2d');
//context and id of canvas

var w = window.innerWidth;
var h = window.innerHeight;
//width and height of canvas

particleCanvas.width = w;
particleCanvas.height = h;
//setting the width and height for canvas

var mouse = {
  x: w / 2,
  y: h / 2
};
//mouse position

document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY
}, false);
//finding the mouse position

//when clicked, the set-up function runs
document.addEventListener('mouseover',
  function() {
var particleNumber = 75;

var particles = [];
// the particles storage

for(i = 0; i < particleNumber; i++) {
  setTimeout(function(){
    particles.push(new createParticle);
