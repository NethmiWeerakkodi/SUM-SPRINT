let level = 1;
let score = 0;
let questionCount = 0;
let timerDuration = 60; // Default for level 1
let timerInterval;
const totalQuestionsPerLevel = 3;

// Level configuration
const levelConfig = {
    1: { timer: 60, scorePerQuestion: 10 },
    2: { timer: 45, scorePerQuestion: 15 },
    3: { timer: 30, scorePerQuestion: 20 },
    4: { timer: 15, scorePerQuestion: 25 },
};

// Initialize game
document.addEventListener("DOMContentLoaded", () => {
    loadLevel(level);

    // Add event listeners
    document.getElementById("submit-answer").addEventListener("click", handleSubmitAnswer);
    document.getElementById("quit-game").addEventListener("click", quitGame);
});

// Load level data
function loadLevel(currentLevel) {
    const config = levelConfig[currentLevel];
    questionCount = 0;
    timerDuration = config.timer;

    document.getElementById("level").innerText = `Level: ${currentLevel}`;
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("answer-input").value = ""; // Clear input field

    startTimer();
    fetchQuestion();
}

// Timer functionality
function startTimer() {
    clearInterval(timerInterval);
    let timeLeft = timerDuration;
    document.getElementById("time-left").innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}
// Quit game functionality
function quitGame() {
    if (confirm("Are you sure you want to quit?")) {
        saveScore();
        window.location.href = "score.php";
    }
}


