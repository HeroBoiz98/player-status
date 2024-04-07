const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const resetBtn = document.getElementById('resetBtn');
const messageDisplay = document.getElementById('message');

player1Btn.addEventListener('click', () => {
    fetch('/player1')
        .then(response => response.text())
        .then(message => {
            messageDisplay.textContent = message;
            messageDisplay.style.color = '#4CAF50'; // Green color for player 1
        });
});

player2Btn.addEventListener('click', () => {
    fetch('/player2')
        .then(response => response.text())
        .then(message => {
            messageDisplay.textContent = message;
            messageDisplay.style.color = '#2196F3'; // Blue color for player 2
        });
});

resetBtn.addEventListener('click', () => {
    fetch('/reset')
        .then(response => response.text())
        .then(message => {
            messageDisplay.textContent = message;
            messageDisplay.style.color = '#333'; // Default color for reset
        });
});

function getStatus() {
    fetch('/status')
        .then(response => response.text())
        .then(status => {
            messageDisplay.textContent = status;
        });
}

getStatus();
setInterval(getStatus, 2000);
