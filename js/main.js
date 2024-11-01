let minutes = 0;
let seconds = 0;
let timerInterval = null;
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const continueButton = document.getElementById('continue-button');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
continueButton.addEventListener('click', continueTimer);

function startTimer() {
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    continueButton.disabled = true;
}

function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
    continueButton.disabled = false;
}

function continueTimer() {
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    continueButton.disabled = true;
}

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }

    minutesSpan.textContent = padZero(minutes);
    secondsSpan.textContent = padZero(seconds);


    timerDisplay.classList.add('animate');
    setTimeout(() => {
        timerDisplay.classList.remove('animate');
    }, 500);
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}