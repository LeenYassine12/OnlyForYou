/* COUNTDOWN TO 4 MONTHS (19-2) */
const targetDate = new Date("2026-02-19");

setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("timer").innerHTML =
    days >= 0 ? `${days} days left ❤️` : "We’re 4 months 🥹❤️";
}, 1000);

/* QUIZ GAME */
const questions = [
  {
    q: "Who fell in love first?",
    a: ["You 😌", "Me 🥰"],
    correct: 1
  },
  {
    q: "Who loves more?",
    a: ["You ❤️", "Me ❤️"],
    correct: 0
  },
  {
    q: "Are you my forever?",
    a: ["Yes 🥹", "Always ❤️"],
    correct: 1
  }
];

let current = 0;

const qText = document.getElementById("question");
const buttons = document.querySelectorAll(".game button");
const result = document.getElementById("result");

function loadQuestion() {
  qText.innerHTML = questions[current].q;
  buttons[0].innerHTML = questions[current].a[0];
  buttons[1].innerHTML = questions[current].a[1];
}

loadQuestion();

function answer(choice) {
  if (choice === questions[current].correct) {
    result.innerHTML = "Correct ❤️";
  } else {
    result.innerHTML = "Still cute 😉❤️";
  }

  current++;

  if (current < questions.length) {
    setTimeout(() => {
      result.innerHTML = "";
      loadQuestion();
    }, 1000);
  } else {
    setTimeout(() => {
      result.innerHTML = "That’s us 🥹❤️";
      document.getElementById("hidden").style.display = "block";
      alert("I love you ❤️");
    }, 1000);
  }
}

