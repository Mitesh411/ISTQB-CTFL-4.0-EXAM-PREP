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
const skipBtn = document.getElementById('skip-btn');
const timerAnnouncer = document.getElementById('timer-announcer');
const progressBar = document.getElementById('progress-bar');
const answerFeedback = document.getElementById('answer-feedback');

// Screen reader announcements at these seconds remaining
const TIMER_WARNINGS = { 300: '5 minutes remaining.', 60: '1 minute remaining.', 0: 'Time is up.' };

// Initialize the quiz
function initQuiz() {
    // Simulate loading from JSON file
    setTimeout(() => {
        loadQuizData();
    }, 1000);
}

// Load quiz data from external JSON file
async function loadQuizData() {
    const messageElement = document.getElementById('loading-message');
    const retryButton = document.getElementById('retry-btn');
    try {
        const response = await fetch('questions.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data.questions) || data.questions.length === 0) {
            throw new Error('questions.json has no questions');
        }
        questions = data.questions;
        loadingDiv.style.display = 'none';
        startScreen.style.display = 'block';
        updateCounter();
    } catch (error) {
        console.error('Error loading quiz data:', error);
        messageElement.textContent = 'Could not load the exam questions. Check your connection and try again.';
        retryButton.style.display = 'inline-block';
    }
}

// Retry loading quiz data after a failure
function retryLoadQuiz() {
    document.getElementById('loading-message').textContent = 'Loading quiz questions...';
    document.getElementById('retry-btn').style.display = 'none';
    loadQuizData();
}

// Start the quiz
function startQuiz() {
    startScreen.style.display = 'none';
    questionSection.style.display = 'block';
    quizStarted = true;
    startTimer();
    displayQuestion();
}

// Start the countdown timer
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

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running low
    if (timeRemaining <= 300) { // 5 minutes
        timerElement.style.color = '#ff6b6b';
    }

    // The timer itself is silent to screen readers, so announce key moments instead
    if (quizStarted && timeRemaining in TIMER_WARNINGS) {
        timerAnnouncer.textContent = TIMER_WARNINGS[timeRemaining];
    }
}

// Update question counter
function updateCounter() {
    counterElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressElement.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuemax', questions.length);
    progressBar.setAttribute('aria-valuenow', Math.min(currentQuestionIndex + 1, questions.length));
    progressBar.setAttribute('aria-valuetext', counterElement.textContent);
}

// Display current question
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    optionsList.innerHTML = '';
    answerFeedback.textContent = '';
    selectedAnswer = null;
    nextBtn.disabled = true;
    skipBtn.disabled = false;

    // Each answer is a native radio button inside its label, so it works with the keyboard and screen readers
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.addEventListener('change', () => selectOption(index, label));
        const text = document.createElement('span');
        text.textContent = option;
        label.append(input, text);
        optionsList.appendChild(label);
    });

    updateCounter();
    updateProgress();

    // Move focus to the new question so screen readers read it
    questionText.focus();
}

// Handle option selection
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

// Move to next question
function nextQuestion() {
    // Next is disabled while feedback shows; ignore repeat calls until the next question loads
    if (selectedAnswer === null || nextBtn.disabled) return;

    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const isCorrect = selectedAnswer === question.correct;

    // Lock the controls during feedback so a second click can't score this answer twice
    nextBtn.disabled = true;
    skipBtn.disabled = true;

    // Show correct/incorrect animation
    options[question.correct].classList.add('correct');
    
    if (!isCorrect) {
        options[selectedAnswer].classList.add('incorrect');
    } else {
        score++;
    }

    attempted++;

    // Say the result in words too, so it doesn't rely on colour alone
    answerFeedback.textContent = isCorrect
        ? 'Correct!'
        : `Incorrect. The correct answer is: ${question.options[question.correct]}`;

    // Disable all options
    options.forEach(opt => {
        opt.querySelector('input').disabled = true;
    });

    // Move to next question after animation
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 2000);
}

// Skip current question
function skipQuestion() {
    skipped++;
    currentQuestionIndex++;
    displayQuestion();
}

// Exit quiz with confirmation
function exitQuiz() {
    if (confirm('Are you sure you want to exit the quiz?')) {
        endQuiz();
    }
}

// End the quiz and show results
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
    document.getElementById('results-heading').focus();
}

// Format time display
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Restart the quiz
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
    progressBar.setAttribute('aria-valuenow', 0);
    progressBar.removeAttribute('aria-valuetext');
    timerAnnouncer.textContent = '';
    
    // Clear any running timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    updateTimerDisplay();
    updateCounter();
    document.getElementById('start-btn').focus();
}

// Flashcard settings and state variables
const FLASHCARD_BOXES_KEY = 'istqb-flashcard-boxes';
const FLASHCARD_CHAPTER_KEY = 'istqb-flashcard-chapter';
const FLASHCARD_MAX_BOX = 3;       // Leitner boxes: 1 = to learn, 2 = known, 3 = mastered
const FLASHCARD_REVIEW_GAP = 3;    // a "Review again" card comes back after this many cards
const FLASHCARD_BOX_LABELS = { 1: 'To learn', 2: 'Known', 3: 'Mastered' };
let flashcards = [];
let flashcardDeck = [];
let currentFlashcard = 0;
let flashcardFlipped = false;
let flashcardBoxes = {};

// Browser storage can be unavailable (private mode, blocked site data), so never let it break the deck
function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch (error) {
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        // Progress is not saved, but the deck keeps working
    }
}

function flashcardKey(card) {
    return `${card.chapter}|${card.frontside}`;
}

function flashcardBox(card) {
    const box = flashcardBoxes[flashcardKey(card)];
    return Number.isInteger(box) && box >= 1 && box <= FLASHCARD_MAX_BOX ? box : 1;
}

function shuffleArray(items) {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}

// Load flashcards from external JSON file
async function loadFlashcards() {
    const textElement = document.getElementById('fc-text');
    const retryButton = document.getElementById('fc-retry');
    textElement.textContent = 'Loading flashcards...';
    retryButton.style.display = 'none';
    try {
        const response = await fetch('flashcard.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        flashcards = await response.json();
        const savedBoxes = readStorage(FLASHCARD_BOXES_KEY, {});
        flashcardBoxes = savedBoxes && typeof savedBoxes === 'object' && !Array.isArray(savedBoxes) ? savedBoxes : {};

        // Add one filter option per chapter found in the data
        const select = document.getElementById('fc-chapter');
        select.length = 1; // keep only "All chapters" in case this is a retry
        const chapters = [...new Set(flashcards.map(card => card.chapter))]
            .sort((a, b) => Number(a) - Number(b));
        chapters.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter;
            option.textContent = `Chapter ${chapter}`;
            select.appendChild(option);
        });

        // Reopen the chapter the user was last studying
        const savedChapter = readStorage(FLASHCARD_CHAPTER_KEY, 'all');
        if ([...select.options].some(option => option.value === savedChapter)) {
            select.value = savedChapter;
        }

        filterFlashcards();
    } catch (error) {
        console.error('Error loading flashcards:', error);
        textElement.textContent = 'Could not load the flashcards. Check your connection and try again.';
        retryButton.style.display = 'inline-block';
    }
}

// Cards for the selected chapter
function chapterFlashcards() {
    const chapter = document.getElementById('fc-chapter').value;
    return chapter === 'all' ? flashcards : flashcards.filter(card => card.chapter === chapter);
}

// Build the deck with the cards that need the most review first
function buildFlashcardDeck(shuffle) {
    const cards = [...chapterFlashcards()];
    if (shuffle) shuffleArray(cards);
    flashcardDeck = cards.sort((a, b) => flashcardBox(a) - flashcardBox(b)); // stable sort keeps order within a box
    currentFlashcard = 0;
    flashcardFlipped = false;
}

function setFlashcardStatus(message) {
    document.getElementById('fc-status').textContent = message;
}

// Show only the cards for the selected chapter
function filterFlashcards() {
    writeStorage(FLASHCARD_CHAPTER_KEY, document.getElementById('fc-chapter').value);
    buildFlashcardDeck(false);
    setFlashcardStatus('');
    displayFlashcard();
}

// Shuffle the deck, still keeping cards to review first
function shuffleFlashcards() {
    if (!flashcards.length) return;
    buildFlashcardDeck(true);
    setFlashcardStatus('Deck shuffled. Cards you still need to learn come first.');
    displayFlashcard();
}

// Forget progress for the cards in the selected chapter
function resetFlashcardProgress() {
    if (!flashcards.length) return;
    if (!confirm('Reset your progress for the cards in this chapter selection?')) return;
    chapterFlashcards().forEach(card => delete flashcardBoxes[flashcardKey(card)]);
    writeStorage(FLASHCARD_BOXES_KEY, flashcardBoxes);
    buildFlashcardDeck(false);
    setFlashcardStatus('Progress reset.');
    displayFlashcard();
}

// Display current flashcard
function displayFlashcard() {
    const card = flashcardDeck[currentFlashcard];
    if (!card) return;

    const cards = chapterFlashcards();
    const known = cards.filter(c => flashcardBox(c) > 1).length;

    document.getElementById('fc-card').classList.toggle('flipped', flashcardFlipped);
    document.getElementById('fc-chapter-label').textContent = `Chapter ${card.chapter}`;
    document.getElementById('fc-box-label').textContent = FLASHCARD_BOX_LABELS[flashcardBox(card)];
    document.getElementById('fc-text').textContent = flashcardFlipped ? card.backside : card.frontside;
    document.getElementById('fc-flip').textContent = flashcardFlipped ? 'Show Question' : 'Show Answer';
    document.getElementById('fc-counter').textContent =
        `Card ${currentFlashcard + 1} of ${flashcardDeck.length} · Known ${known} of ${cards.length}`;

    document.getElementById('fc-flip').disabled = false;
    document.getElementById('fc-prev').disabled = currentFlashcard === 0;
    document.getElementById('fc-next').disabled = currentFlashcard === flashcardDeck.length - 1;
    // Rate a card only after seeing its answer
    document.getElementById('fc-knew').disabled = !flashcardFlipped;
    document.getElementById('fc-review').disabled = !flashcardFlipped;
}

// Flip between question and answer
function flipFlashcard() {
    if (!flashcardDeck.length) return;
    flashcardFlipped = !flashcardFlipped;
    displayFlashcard();
}

// Move to previous flashcard
function prevFlashcard() {
    if (currentFlashcard > 0) {
        currentFlashcard--;
        flashcardFlipped = false;
        displayFlashcard();
    }
}

// Move to next flashcard
function nextFlashcard() {
    if (currentFlashcard < flashcardDeck.length - 1) {
        currentFlashcard++;
        flashcardFlipped = false;
        displayFlashcard();
    }
}

// Record whether the user knew the answer, then move on
function markFlashcard(knewIt) {
    const card = flashcardDeck[currentFlashcard];
    if (!card || !flashcardFlipped) return;

    const key = flashcardKey(card);
    if (knewIt) {
        flashcardBoxes[key] = Math.min(flashcardBox(card) + 1, FLASHCARD_MAX_BOX);
    } else {
        flashcardBoxes[key] = 1;
        // Bring the card back a few cards later in this round
        flashcardDeck.splice(currentFlashcard + 1 + FLASHCARD_REVIEW_GAP, 0, card);
    }
    writeStorage(FLASHCARD_BOXES_KEY, flashcardBoxes);

    if (currentFlashcard < flashcardDeck.length - 1) {
        currentFlashcard++;
        flashcardFlipped = false;
        setFlashcardStatus('');
    } else {
        buildFlashcardDeck(true);
        setFlashcardStatus('Round complete. Starting a new round with the cards to learn first.');
    }
    displayFlashcard();
}

// Keyboard shortcuts while the flashcard section has focus
function handleFlashcardKeys(event) {
    const tag = event.target.tagName;
    if (tag === 'SELECT') return;
    // Buttons already respond to Space and Enter on their own
    if (tag === 'BUTTON' && (event.key === ' ' || event.key === 'Enter')) return;

    const actions = {
        ArrowLeft: prevFlashcard,
        ArrowRight: nextFlashcard,
        ' ': flipFlashcard,
        Enter: flipFlashcard,
        k: () => markFlashcard(true),
        r: () => markFlashcard(false),
    };
    const action = actions[event.key.length === 1 ? event.key.toLowerCase() : event.key];
    if (action) {
        event.preventDefault();
        action();
    }
}

// Initialize the quiz and flashcards when page loads
window.onload = () => {
    initQuiz();
    loadFlashcards();
    document.getElementById('fc-section').addEventListener('keydown', handleFlashcardKeys);
};

// Prevent page refresh during quiz
window.onbeforeunload = function(e) {
    if (quizStarted && currentQuestionIndex < questions.length) {
        return "Are you sure you want to leave? Your progress will be lost.";
    }
};
