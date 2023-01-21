let sliderItems = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slideCount = sliderItems.length;

let startSlide = 1;
let slideNum = document.getElementById("slide-number");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

let ulEle = document.createElement("ul");
ulEle.setAttribute("id", "pag-ul");

for (let i = 1; i <= slideCount; i++) {
  let ulItems = document.createElement("li");
  ulItems.setAttribute("data-index", i);

  ulItems.appendChild(document.createTextNode(i));

  ulEle.appendChild(ulItems);
}
document.getElementById("indicators").appendChild(ulEle);

let createdUl = document.getElementById("pag-ul");
let indicatorsItems = Array.from(document.querySelectorAll("#pag-ul li"));

for (let i = 0; i < indicatorsItems.length; i++) {
  indicatorsItems[i].onclick = function () {
    startSlide = parseInt(this.getAttribute("data-index"));
    check();
  };
}

check();
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    startSlide++;
    check();
  }
}
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    startSlide--;
    check();
  }
}

function check() {
  slideNum.textContent = "Slide #" + startSlide + " of " + slideCount;

  removeActiveClass();

  sliderItems[startSlide - 1].classList.add("active");
  createdUl.children[startSlide - 1].classList.add("active");

  if (startSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (startSlide == slideCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function removeActiveClass() {
  sliderItems.forEach((item) => {
    item.classList.remove("active");
  });
  indicatorsItems.forEach((item) => {
    item.classList.remove("active");
  });
}
