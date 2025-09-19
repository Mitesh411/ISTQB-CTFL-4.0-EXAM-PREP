// Quiz state variables
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let attempted = 0;
let skipped = 0;
let selectedAnswer = null;
let timeRemaining = 3600; // 60 minutes in seconds
let timerInterval;
let quizStarted = false;

// DOM elements
const loadingDiv = document.getElementById('loading');
const startScreen = document.getElementById('start-screen');
const questionSection = document.getElementById('question-section');
const resultsSection = document.getElementById('results-section');
const timerElement = document.getElementById('timer');
const counterElement = document.getElementById('quiz-counter');
const progressElement = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const nextBtn = document.getElementById('next-btn');

/**
 * Initializes the quiz by loading the quiz data.
 */
function initQuiz() {
    // Simulate loading from JSON file
    setTimeout(() => {
        loadQuizData();
    }, 1000);
}

/**
 * Loads quiz data from an external JSON file.
 * If the file fails to load, it falls back to embedded data.
 * @async
 */
async function loadQuizData() {
    try {
        // In a real application, replace this with:
        // const response = await fetch('quiz-data.json');
        // const data = await response.json();
        
        // For demonstration, using embedded data
        const response = await fetch('questions.json').catch(() => {
            // Fallback to embedded data if JSON file is not found
            return {
                json: () => Promise.resolve({
                    "questions": [
                        {
                            "id": 1,
                            "question": "What is the capital of France?",
                            "options": ["London", "Berlin", "Paris", "Madrid"],
                            "correct": 2
                        },
                        {
                            "id": 2,
                            "question": "Which planet is known as the Red Planet?",
                            "options": ["Venus", "Mars", "Jupiter", "Saturn"],
                            "correct": 1
                        },
                        {
                            "id": 3,
                            "question": "What is the largest mammal in the world?",
                            "options": ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                            "correct": 1
                        },
                        {
                            "id": 4,
                            "question": "Who painted the Mona Lisa?",
                            "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                            "correct": 2
                        },
                        {
                            "id": 5,
                            "question": "What is the chemical symbol for gold?",
                            "options": ["Go", "Gd", "Au", "Ag"],
                            "correct": 2
                        },
                        {
                            "id": 6,
                            "question": "Which year did World War II end?",
                            "options": ["1944", "1945", "1946", "1947"],
                            "correct": 1
                        },
                        {
                            "id": 7,
                            "question": "What is the smallest country in the world?",
                            "options": ["Monaco", "Nauru", "Vatican City", "San Marino"],
                            "correct": 2
                        },
                        {
                            "id": 8,
                            "question": "Which programming language is known as the 'language of the web'?",
                            "options": ["Python", "Java", "JavaScript", "C++"],
                            "correct": 2
                        }
                    ]
                })
            };
        });
        
        const data = await response.json();
        questions = data.questions;
        loadingDiv.style.display = 'none';
        startScreen.style.display = 'block';
        updateCounter();
    } catch (error) {
        console.error('Error loading quiz data:', error);
        loadingDiv.innerHTML = 'Error loading quiz data. Please refresh the page.';
    }
}

/**
 * Starts the quiz by hiding the start screen, showing the question section,
 * starting the timer, and displaying the first question.
 */
function startQuiz() {
    startScreen.style.display = 'none';
    questionSection.style.display = 'block';
    quizStarted = true;
    startTimer();
    displayQuestion();
}

/**
 * Starts the countdown timer for the quiz.
 */
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

/**
 * Updates the timer display with the remaining time.
 */
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running low
    if (timeRemaining <= 300) { // 5 minutes
        timerElement.style.color = '#ff6b6b';
    }
}

/**
 * Updates the question counter to show the current question number.
 */
function updateCounter() {
    counterElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

/**
 * Updates the progress bar to reflect the quiz progress.
 */
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressElement.style.width = `${progress}%`;
}

/**
 * Displays the current question and its options.
 */
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    optionsList.innerHTML = '';
    selectedAnswer = null;
    nextBtn.disabled = true;

    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'option';
        li.textContent = option;
        li.onclick = () => selectOption(index, li);
        optionsList.appendChild(li);
    });

    updateCounter();
    updateProgress();
}

/**
 * Handles the selection of an answer option.
 * @param {number} index - The index of the selected option.
 * @param {HTMLElement} element - The HTML element of the selected option.
 */
function selectOption(index, element) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selection to clicked option
    element.classList.add('selected');
    selectedAnswer = index;
    nextBtn.disabled = false;
}

/**
 * Moves to the next question after an answer has been selected.
 */
function nextQuestion() {
    if (selectedAnswer === null) return;

    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const isCorrect = selectedAnswer === question.correct;

    // Show correct/incorrect animation
    options[question.correct].classList.add('correct');
    
    if (!isCorrect) {
        options[selectedAnswer].classList.add('incorrect');
    } else {
        score++;
    }

    attempted++;

    // Disable all options
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    // Move to next question after animation
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 2000);
}

/**
 * Skips the current question and moves to the next one.
 */
function skipQuestion() {
    skipped++;
    currentQuestionIndex++;
    displayQuestion();
}

/**
 * Exits the quiz after confirming with the user.
 */
function exitQuiz() {
    if (confirm('Are you sure you want to exit the quiz?')) {
        endQuiz();
    }
}

/**
 * Ends the quiz and displays the results.
 */
function endQuiz() {
    clearInterval(timerInterval);
    questionSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('final-score').textContent = `${score}/${questions.length} (${percentage}%)`;
    
    const details = `
        Attempted: ${attempted} questions<br>
        Skipped: ${skipped} questions<br>
        Time used: ${formatTime(3600 - timeRemaining)}
    `;
    document.getElementById('result-details').innerHTML = details;
}

/**
 * Formats the time in seconds to a mm:ss format.
 * @param {number} seconds - The time in seconds.
 * @returns {string} The formatted time string.
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Restarts the quiz by resetting all state variables and the display.
 */
function restartQuiz() {
    // Reset all variables
    currentQuestionIndex = 0;
    score = 0;
    attempted = 0;
    skipped = 0;
    selectedAnswer = null;
    timeRemaining = 3600;
    quizStarted = false;

    // Reset display
    resultsSection.style.display = 'none';
    startScreen.style.display = 'block';
    timerElement.style.color = 'white';
    progressElement.style.width = '0%';
    
    // Clear any running timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    updateTimerDisplay();
    updateCounter();
}

/**
 * Initializes the quiz when the page loads.
 */
window.onload = initQuiz;

/**
 * Prevents page refresh during the quiz.
 * @param {Event} e - The beforeunload event.
 * @returns {string} A message to confirm leaving the page.
 */
window.onbeforeunload = function(e) {
    if (quizStarted && currentQuestionIndex < questions.length) {
        return "Are you sure you want to leave? Your progress will be lost.";
    }
};
