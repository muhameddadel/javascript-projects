let serial = document.querySelector(".serial");
let generate = document.querySelector(".generate");
generate.onclick = function () {
  let pattern =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-!@#$_";
  let patternCount = 10;
  let randomSerial = "";
  for (let i = 0; i < patternCount; i++) {
    randomSerial += pattern[Math.trunc(Math.random() * pattern.length)];
  }
  serial.innerHTML = randomSerial;
};
