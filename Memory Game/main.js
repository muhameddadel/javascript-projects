document.querySelector(".start span").onclick = function () {
  let name = prompt("Whats Your Name");
  if (name == null || name == "") {
    document.querySelector(".name span").innerHTML = "Unknown";
  } else {
    document.querySelector(".name span").innerHTML = name;
  }
  document.querySelector(".start").remove();
};

let duration = 500;

let container = document.querySelector(".icon-blocks");
let blocks = Array.from(container.children);

let rangeOrder = [...Array(blocks.length).keys()];

shuffle(rangeOrder);

blocks.forEach((block, index) => {
  block.style.order = rangeOrder[index];
  block.addEventListener("click", function () {
    flip(block);
  });
});

function flip(block) {
  block.classList.add("is-flipped");
  let allFlipped = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flipped")
  );
  if (allFlipped.length === 2) {
    stopClick();
    checkMatched(allFlipped[0], allFlipped[1]);
  }
}

function stopClick() {
  container.classList.add("no-clicking");
  setTimeout(() => {
    container.classList.remove("no-clicking");
  }, duration);
}

function checkMatched(first, second) {
  let triesEle = document.querySelector(".try span");
  if (first.dataset.tech === second.dataset.tech) {
    first.classList.remove("is-flipped");
    second.classList.remove("is-flipped");

    first.classList.add("has-match");
    second.classList.add("has-match");
  } else {
    triesEle.innerHTML = parseInt(triesEle.innerHTML) + 1;

    setTimeout(() => {
      first.classList.remove("is-flipped");
      second.classList.remove("is-flipped");
    }, duration);
  }
}

function shuffle(arr) {
  let curr = arr.length,
    temp,
    random;
  while (curr > 0) {
    random = Math.trunc(Math.random() * curr);
    curr--;
    temp = arr[curr];
    arr[curr] = arr[random];
    arr[random] = temp;
  }
  return arr;
}
