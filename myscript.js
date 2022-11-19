const gameBoard = document.querySelector('.game-board');
const gameSquares = document.querySelectorAll('.square');
const winnerText = document.querySelector('.winner')
let currentPlayer = 'X';
let boardOptions = ['', '', '', '', '', '', '', '', '',];
let running = false;
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



//Place Mark

gameSquares.forEach((gameSquare) => {
    gameSquare.addEventListener('click', () => {
        if (gameSquare.innerText != '') return;
            gameSquare.innerText = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
       } 
     )
  })

function checkWinner() {
    winningCombinations.forEach(combination => {
        let check = combination.every(i => gameSquares[i].innerText.trim() == currentPlayer);
        if (check) {
            winnerText.innerText = (`${currentPlayer} has won`)
        }
    });
  }