let timer;
let isRunning = false;
let seconds = 0;
let lapCount = 0;

const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')};
}

function updateDisplay() {
    display.textContent = formatTime(seconds);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
    lapsContainer.innerHTML = ''; // Clear laps
    lapCount = 0;
}

function recordLap() {
    if (isRunning) {
        lapCount++;
        const lapTime = document.createElement('div');
        lapTime.className = 'lap';
        lapTime.textContent = Lap ${lapCount}: ${formatTime(seconds)};
        lapsContainer.appendChild(lapTime);
    }
}

// Event listeners
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);