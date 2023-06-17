const cells = document.querySelectorAll(".cell");
const winnerDisplay = document.getElementById("winner");
let currentPlayer = "X";
let moves = 0;
let winner = null;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "" && !winner) {
      cell.textContent = currentPlayer;
      moves++;
      checkWinningConditions();
      togglePlayer();
    }
  });
});

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinningConditions() {
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      winner = currentPlayer;
      winnerDisplay.textContent = `Winner: ${currentPlayer}`;
      break;
    }
  }

  if (!winner && moves === 9) {
    winnerDisplay.textContent = "Draw";
  }
}
