let countDown = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let timeDiff = countDown - dateNow;

  let days = Math.trunc(timeDiff / 1000 / 60 / 60 / 24);
  let hours = Math.trunc((timeDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minutes = Math.trunc((timeDiff % (1000 * 60 * 60)) / 1000 / 60);
  let seconds = Math.trunc((timeDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (timeDiff === 0) {
    clearInterval(counter);
  }
}, 1000);
