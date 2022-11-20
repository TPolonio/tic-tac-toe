const gameBoard = document.querySelector('.game-board');
const gameSquares = document.querySelectorAll('.square');
const winnerText = document.querySelector('.winner-text')
const restartButton = document.querySelector('.restart-button')
let currentPlayer = 'X';
let boardOptions = ['', '', '', '', '', '', '', '', '',];
let moveCounter = 0;
let gameOver = false
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



//Play Round
gameSquares.forEach((gameSquare) => {
    gameSquare.addEventListener('click', () => {
        if (gameSquare.innerText != '') return;
        if(gameOver == true) return;
            gameSquare.innerText = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
            moveCounter++
            if (moveCounter == 9) { 
                winnerText.innerText = 'Its a tie'
            }
       } 
     )
  })

//Restart Game
restartButton.addEventListener('click',() =>{
    restartGame();
})

function checkWinner() {
    winningCombinations.forEach(combination => {
        let check = combination.every(i => gameSquares[i].innerText.trim() == currentPlayer);
        if (check) {
            winnerText.innerText = (`${currentPlayer} has won`);
            gameOver = true;
        }
    });
  }

function restartGame() {
    gameSquares.forEach((gameSquare) => {
        gameSquare.innerText = '';
        winnerText.innerText = '';
        gameOver = false;
        moveCounter = 0
})}