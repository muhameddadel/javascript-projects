// let section = document.querySelector(".three");
// let allSpans = document.querySelectorAll(".progress span");

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {
//     allSpans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
// };

/////////////////////////////////////////////////////

let section = document.querySelector(".three");
let nums = document.querySelectorAll(".nums .num");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
