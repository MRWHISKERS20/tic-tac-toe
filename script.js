
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

// Check for a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      alert(`${gameBoard[a]} wins!`);
      return true;
    }
  }
  return false;
}

// Handle cell click
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = cell.getAttribute('data-index');
    if (!gameBoard[index]) {
      gameBoard[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        return;
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

// Reset game
resetButton.addEventListener('click', () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  cells.forEach(cell => cell.textContent = '');
});
