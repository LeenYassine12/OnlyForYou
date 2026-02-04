/* COUNTDOWN TO 4 MONTHS (19-2) */
const targetDate = new Date("2026-02-19");
setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("timer").innerHTML =
    days >= 0 ? `${days} days left ❤️` : "We’re 4 months 🥹❤️";
}, 1000);

/* GAME 1: LOVE QUIZ */
const quizQuestions = [
  {q: "Who fell in love first?", a:["You 😌","Me 🥰"], correct:1},
  {q: "Who loves more?", a:["You ❤️","Me ❤️"], correct:0},
  {q: "Are you my forever?", a:["Yes 🥹","Always ❤️"], correct:1}
];
let quizIndex=0;
const quizQ=document.getElementById("quizQuestion");
const quizR=document.getElementById("quizResult");
function loadQuiz(){quizQ.innerHTML=quizQuestions[quizIndex].q;document.querySelectorAll(".game")[0].querySelectorAll("button")[0].innerHTML=quizQuestions[quizIndex].a[0];document.querySelectorAll(".game")[0].querySelectorAll("button")[1].innerHTML=quizQuestions[quizIndex].a[1];}
function quizAnswer(choice){if(choice===quizQuestions[quizIndex].correct){quizR.innerHTML="Correct ❤️";}else{quizR.innerHTML="Still cute 😉❤️";}quizIndex++;if(quizIndex<quizQuestions.length){setTimeout(()=>{quizR.innerHTML="";loadQuiz();},1000);}else{setTimeout(()=>{quizR.innerHTML="You know me 🥹❤️";},1000);}}
loadQuiz();

/* GAME 2: WHO SAID IT */
const quotes = [
  {q:"I love you more!", answer:1},
  {q:"Let's get ice cream 🍦", answer:0},
  {q:"You're my favorite ❤️", answer:1}
];
let qIndex=0;
const quoteQ=document.getElementById("quoteQuestion");
const quoteR=document.getElementById("quoteResult");
function loadQuote(){quoteQ.innerHTML=quotes[qIndex].q;}
function quoteGuess(choice){if(choice===quotes[qIndex].answer){quoteR.innerHTML="Correct ❤️";}else{quoteR.innerHTML="Still cute 😉";}qIndex++;if(qIndex<quotes.length){setTimeout(()=>{quoteR.innerHTML="";loadQuote();},1000);}else{setTimeout(()=>{quoteR.innerHTML="You know me 🥹❤️";},1000);}}
loadQuote();

/* GAME 3: LOVE COUNTER */
let points=0;
function addLove(){points++;document.getElementById("lovePoints").innerHTML=points;}

/* GAME 4: PUZZLE OF US */
function allowDrop(ev){ev.preventDefault();}
function drag(ev){ev.dataTransfer.setData("text", ev.target.id);}
function drop(ev){ev.preventDefault();var data=ev.dataTransfer.getData("text");ev.target.appendChild(document.getElementById(data));document.getElementById("puzzleResult").innerHTML="You completed our love ❤️";}

// Floating hearts for Valentine's
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";
  document.querySelector(".valentine").appendChild(heart);
  heart.innerHTML = "❤️";

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);
