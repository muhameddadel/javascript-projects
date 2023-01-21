let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  nav.classList.remove("open");
};
document.onkeyup = function (ev) {
  if (ev.key === "Escape") {
    nav.classList.remove("open");
  }
};
