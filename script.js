let questions = [];
let currentQuestion = 0;
let score = 0;
let timerInterval;

document.addEventListener('DOMContentLoaded', () => {
  fetch('questions.json')
    .then(res => res.json())
    .then(data => {
      questions = data;
      startTimer(60 * 60); // 60 minutes in seconds
      showQuestion();
    })
    .catch(() => {
      document.getElementById('quiz').innerHTML = 'Failed to load quiz data.';
    });
});

function startTimer(duration) {
  let timer = duration;
  const countdown = document.getElementById('countdown');
  timerInterval = setInterval(() => {
    let minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    let seconds = String(timer % 60).padStart(2, '0');
    countdown.textContent = `${minutes}:${seconds}`;
    if (--timer < 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    finishQuiz();
    return;
  }
  const q = questions[currentQuestion];
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = `
    <div class="question">${q.question}</div>
    <ul class="options">
      ${q.options.map((opt, idx) => `<li class="option" data-idx="${idx}">${opt}</li>`).join('')}
    </ul>
  `;

  document.querySelectorAll('.option').forEach(optEl => {
    optEl.addEventListener('click', handleOptionClick);
  });
}

function handleOptionClick(e) {
  const selectedIdx = parseInt(e.currentTarget.getAttribute('data-idx'));
  const q = questions[currentQuestion];

  document.querySelectorAll('.option').forEach((optEl, idx) => {
    optEl.removeEventListener('click', handleOptionClick);
    if (idx === q.answer) {
      optEl.classList.add('correct');
    }
    if (idx === selectedIdx && idx !== q.answer) {
      optEl.classList.add('incorrect');
    }
  });

  if (selectedIdx === q.answer) score++;
  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 900);
}

function finishQuiz() {
  clearInterval(timerInterval);
  document.getElementById('quiz').innerHTML = '';
  document.getElementById('result').innerHTML = `
    <strong>Quiz Finished!</strong><br>
    Your Score: ${score} / ${questions.length}
  `;
}
