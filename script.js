// U.L.T.I.M.O - testlogik
(function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  var screens = {
    start: document.getElementById("screen-start"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result")
  };
  var el = {
    qcount: document.getElementById("qcount"),
    qnum: document.getElementById("qnum"),
    qtotal: document.getElementById("qtotal"),
    timer: document.getElementById("timer"),
    score: document.getElementById("score"),
    bar: document.getElementById("bar"),
    question: document.getElementById("question"),
    options: document.getElementById("options"),
    feedback: document.getElementById("feedback"),
    next: document.getElementById("btn-next"),
    start: document.getElementById("btn-start"),
    restart: document.getElementById("btn-restart"),
    resultScore: document.getElementById("result-score"),
    resultRank: document.getElementById("result-rank"),
    resultText: document.getElementById("result-text"),
    resultTime: document.getElementById("result-time"),
    review: document.getElementById("review"),
    visitors: document.getElementById("visitors")
  };

  var MAX_QUESTIONS = 15;
  var questions = QUESTIONS.slice(0, MAX_QUESTIONS);
  var index = 0;
  var correct = 0;
  var answers = [];
  var startTime = 0;
  var tick = null;

  var RANKS = [
    { min: 0,  title: "Disketten (1,44 MB)",     text: "Det är lugnt. Ladda om och försök igen." },
    { min: 4,  title: "Dial-up-hjärnan",         text: "Det tar tid, men signalen kommer fram." },
    { min: 7,  title: "ADSL-intellekt",          text: "Stabilt resultat. Ingen paketförlust här." },
    { min: 10, title: "Fiber-sinnet",            text: "Snabbt, skarpt och logiskt. Imponerande." },
    { min: 13, title: "Superdatorn",             text: "Nästan felfritt. Någon har tränat." },
    { min: 15, title: "U.L.T.I.M.O-MÄSTARE",     text: "Perfekt resultat. Du har brutit systemet." }
  ];

  function show(name) {
    Object.keys(screens).forEach(function (k) {
      screens[k].classList.toggle("active", k === name);
    });
    window.scrollTo(0, 0);
  }

  function fmt(ms) {
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60);
    s = s % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function startTimer() {
    startTime = Date.now();
    el.timer.textContent = "00:00";
    clearInterval(tick);
    tick = setInterval(function () {
      el.timer.textContent = fmt(Date.now() - startTime);
    }, 500);
  }

  function renderQuestion() {
    var item = questions[index];
    el.qnum.textContent = index + 1;
    el.qtotal.textContent = questions.length;
    el.score.textContent = correct;
    el.bar.style.width = (index / questions.length * 100) + "%";
    el.question.textContent = item.q;
    el.options.innerHTML = "";
    el.feedback.hidden = true;
    el.feedback.className = "feedback";
    el.next.hidden = true;

    item.options.forEach(function (text, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "option";
      var l = document.createElement("span");
      l.className = "letter";
      l.textContent = LETTERS[i] + ".";
      b.appendChild(l);
      b.appendChild(document.createTextNode(text));
      b.addEventListener("click", function () { choose(i); });
      el.options.appendChild(b);
    });
  }

  function choose(i) {
    var item = questions[index];
    var buttons = el.options.querySelectorAll(".option");
    var isRight = i === item.answer;

    buttons.forEach(function (b, n) {
      b.disabled = true;
      if (n === item.answer) b.classList.add("correct");
      if (n === i && !isRight) b.classList.add("wrong");
    });

    if (isRight) correct++;
    answers.push({ chosen: i, right: isRight });
    el.score.textContent = correct;

    el.feedback.hidden = false;
    el.feedback.classList.add(isRight ? "ok" : "no");
    el.feedback.textContent = (isRight ? "RÄTT! " : "FEL. ") + (item.hint || "");

    el.next.textContent = index === questions.length - 1 ? "VISA RESULTAT \u25B6" : "NÄSTA \u25B6";
    el.next.hidden = false;
    el.next.focus();
  }

  function finish() {
    clearInterval(tick);
    var elapsed = Date.now() - startTime;
    el.bar.style.width = "100%";

    var rank = RANKS[0];
    RANKS.forEach(function (r) {
      var scaled = Math.round(r.min / 15 * questions.length);
      if (correct >= scaled) rank = r;
    });

    el.resultScore.textContent = correct + " / " + questions.length;
    el.resultRank.textContent = rank.title;
    el.resultText.textContent = rank.text;
    el.resultTime.textContent = fmt(elapsed);

    el.review.innerHTML = "";
    questions.forEach(function (q, n) {
      var a = answers[n];
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(q.q + " "));
      var span = document.createElement("span");
      span.className = a.right ? "good" : "bad";
      span.textContent = a.right
        ? "[rätt: " + q.options[q.answer] + "]"
        : "[du: " + q.options[a.chosen] + " / rätt: " + q.options[q.answer] + "]";
      li.appendChild(span);
      el.review.appendChild(li);
    });

    show("result");
  }

  function begin() {
    index = 0;
    correct = 0;
    answers = [];
    show("quiz");
    renderQuestion();
    startTimer();
  }

  el.start.addEventListener("click", begin);
  el.restart.addEventListener("click", begin);
  el.next.addEventListener("click", function () {
    if (index < questions.length - 1) {
      index++;
      renderQuestion();
    } else {
      finish();
    }
  });

  // Gammaldags besökarräknare (sparas bara i din egen webbläsare)
  (function counter() {
    var n = 1336;
    try {
      n = parseInt(localStorage.getItem("ultimo_visits") || "1336", 10) + 1;
      localStorage.setItem("ultimo_visits", String(n));
    } catch (e) { n = 1337; }
    var s = String(n);
    while (s.length < 6) s = "0" + s;
    el.visitors.textContent = s;
  })();

  el.qcount.textContent = questions.length;
  el.qtotal.textContent = questions.length;
})();
