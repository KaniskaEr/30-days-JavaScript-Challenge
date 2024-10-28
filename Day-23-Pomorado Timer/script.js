let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const pomodoroButton = document.getElementById("pomodoro");
const shortBreakButton = document.getElementById("shortBreak");
const longBreakButton = document.getElementById("longBreak");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const timerDisplay = document.querySelector(".timer-display");

function updateDisplay() {
  minutesDisplay.textContent = minutes.toString().padStart(2, "0");
  secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          isRunning = false;
          timerDisplay.classList.add("animate");
          setTimeout(() => timerDisplay.classList.remove("animate"), 2000);
          alert("Time's up!");
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function setPomodoro() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function setShortBreak() {
  clearInterval(timer);
  isRunning = false;
  minutes = 5;
  seconds = 0;
  updateDisplay();
}

function setLongBreak() {
  clearInterval(timer);
  isRunning = false;
  minutes = 15;
  seconds = 0;
  updateDisplay();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
pomodoroButton.addEventListener("click", setPomodoro);
shortBreakButton.addEventListener("click", setShortBreak);
longBreakButton.addEventListener("click", setLongBreak);

updateDisplay();
