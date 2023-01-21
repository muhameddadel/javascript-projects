let countSpan = document.querySelector(".app-area .count span"),
  bulletsContainer = document.querySelector(".bullets .spans"),
  bulletsEle = document.querySelector(".bullets"),
  submitBtn = document.querySelector(".submit-btn"),
  resultsSec = document.querySelector(".results"),
  countDownSec = document.querySelector(".countdown"),
  quizSec,
  answerArea,
  theRightAns = 0,
  current = 0,
  countDownTimer = 0;

function getQuestions() {
  let appRequest = new XMLHttpRequest();

  appRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionObj = JSON.parse(this.responseText);
      let countQus = questionObj.length;

      createBullets(countQus);

      getData(questionObj[current], countQus);

      countDown(30, countQus);
      submitBtn.onclick = () => {
        let rigthAnswer = questionObj[current].right_answer;

        current++;

        checkAnswer(rigthAnswer, countQus);

        quizSec.innerHTML = "";
        answerArea.innerHTML = "";

        getData(questionObj[current], countQus);

        handelsBUllets();

        clearInterval(countDownTimer);
        countDown(30, countQus);
        showResults(countQus);
      };
    }
  };

  appRequest.open("GET", "main.json", true);
  appRequest.send();
}

getQuestions();

function createBullets(num) {
  countSpan.innerHTML = num;

  for (let i = 0; i < num; i++) {
    let bullets = document.createElement("span");

    i === 0 ? bullets.classList.add("on") : false;

    bulletsContainer.appendChild(bullets);
  }
}

function getData(obj, count) {
  if (current < count) {
    let title = document.createElement("h2");
    title.appendChild(document.createTextNode(obj.title));

    quizSec = document.querySelector(".quiz-area");
    quizSec.appendChild(title);

    for (let i = 1; i <= 4; i++) {
      let answers = document.createElement("div");

      answers.className = "answer";
      let input = document.createElement("input");
      input.name = "questions";
      input.type = "radio";
      input.id = `answer_${i}`;
      input.dataset.answer = obj[`answer_${i}`];

      i === 1 ? (input.checked = true) : false;

      let label = document.createElement("label");
      label.setAttribute("for", `answer_${i}`);

      label.appendChild(document.createTextNode(obj[`answer_${i}`]));

      answers.appendChild(input);
      answers.appendChild(label);

      answerArea = document.querySelector(".answer-area");
      answerArea.appendChild(answers);
    }
  }
}

function checkAnswer(rightAns, count) {
  let ans = document.getElementsByName("questions");
  let choosenAns;

  for (let i = 0; i < ans.length; i++) {
    ans[i].checked ? (choosenAns = ans[i].dataset.answer) : false;
  }
  console.log(`right answer is:${rightAns}`);
  console.log(`choosen answer is:${choosenAns}`);
  if (rightAns === choosenAns) {
    theRightAns++;
    console.log("good");
  }
}

function handelsBUllets() {
  let bulletsSpans = document.querySelectorAll(".bullets .spans span");
  let arrayfromSpans = Array.from(bulletsSpans);

  arrayfromSpans.forEach((span, index) => {
    current === index ? span.classList.add("on") : false;
  });
}

function showResults(count) {
  let results;
  if (current === count) {
    quizSec.remove();
    answerArea.remove();
    submitBtn.remove();
    bulletsEle.remove();
    if (theRightAns === count) {
      results = `<span class="perfect">Perfect</span> All Answers Was Ture`;
    } else if (theRightAns > count / 2 && theRightAns < count) {
      results = `<span class="good">Good</span> You Answer ${theRightAns} From ${count}`;
    } else {
      results = `<span class="bad">Bad</span> You Answer ${theRightAns} From ${count}`;
    }
    resultsSec.innerHTML = results;
    resultsSec.style.padding = "20px";
    resultsSec.style.textAlign = "center";
    resultsSec.style.backgroundColor = "white";
    resultsSec.style.marginTop = "10px";
  }
}

function countDown(time, count) {
  if (current < count) {
    let minutes, seconds;
    countDownTimer = setInterval(() => {
      minutes = parseInt(time / 60);
      seconds = parseInt(time % 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      countDownSec.innerHTML = `${minutes}:${seconds}`;
      if (--time < 0) {
        clearInterval(countDownTimer);
        submitBtn.click();
      }
    }, 1000);
  }
}
