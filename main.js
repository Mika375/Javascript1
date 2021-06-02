
const timer = document.getElementById('timer');
const start = document.getElementById('btnStart');
const stop = document.getElementById('btnStop');
const reset = document.getElementById('btnReset');

let startTime;
let elapsedTime = 0;
let timerId;
let timeToadd = 0;

function updateTimetText(){
  let h = Math.floor(elapsedTime / 3600000);
  let m = Math.floor(elapsedTime / 60000);
  let s = Math.floor(elapsedTime % 60000 / 1000);
  let ms = Math.floor(elapsedTime % 60000 / 100);
  
  h = ('0' + h).slice(-1);
  m = ('00' + m).slice(-2);
  s = ('00' + s).slice(-2);
  ms = ('0' + ms).slice(-1);
  
  timer.textContent = h + ':' + m + ':' + s + ':' + ms;
}

function countUp() {

timerId = setTimeout(function(){
  elapsedTime = Date.now() - startTime + timeToadd;
  updateTimetText()
  countUp();
}, 10);
}

start.addEventListener("click", function(){
  startTime = Date.now();
  countUp();
});

stop.addEventListener("click", function(){
  clearTimeout(timerId);
  timeToadd += Date.now() - startTime;
});

reset.addEventListener("click", function(){
  elapsedTime = 0;
  timeToadd = 0;
  updateTimetText();
});

