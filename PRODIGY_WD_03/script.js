// script.js
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const clickedCell = event.target;
    const index = clickedCell.getAttribute('data-index');

    if (board[index] || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    checkWinner();
}

function checkWinner() {
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(${currentPlayer} wins!);
            isGameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        alert("It's a draw!");
        isGameActive = false;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);