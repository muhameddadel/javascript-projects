let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let timeEle = document.querySelector(".time");

let seconds = 0;
let interval = null;

// btn action
startBtn.onclick = function start() {
  interval = setInterval(timer, 1000);
};
stopBtn.onclick = stop;
resetBtn.onclick = function reset() {
  stop();
  seconds = 0;
  timeEle.innerHTML = "00:00:00";
};

// set the time
function timer() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  secs < 10 ? (secs = "0" + secs) : secs;
  mins < 10 ? (mins = "0" + mins) : mins;
  hrs < 10 ? (hrs = "0" + hrs) : hrs;
  timeEle.innerHTML = `${hrs}:${mins}:${secs}`;
}

function stop() {
  clearInterval(interval);
}
