"use strict"

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let currentPlayer;

const startGame = document.querySelector('#start-btn');
startGame.addEventListener('click', newGame);

function checkWin(){
    return winConditions.some(el => {
        return el.every(el => {
            return gameSquareValues[el] === currentPlayer;
        })
    });
}

function checkBoardFull(){
    let full = 0;
    gameSquareValues.forEach(el => {
        if (el === 'X' || el === 'O') {
            full++;
        }
    })
    return full == 9;
}

function newGame(){
    gameBoard.gameSquares.forEach((square) => {
        square.removeEventListener('click', handleSquareClick);
    });
    gameBoard.gameSquareValues.fill('');
    gameBoard.renderBoard();
    currentPlayer = 'X';
    gameBoard.gameSquares.forEach((square) => {
        square.addEventListener('click', handleSquareClick);
    });
}
function handleSquareClick(e){
    
}

const gameBoard = (function() {
    let gameSquareValues = ['', '', '', '', '', '', '', '', ''];
    const gameSquares = Array.from(document.querySelectorAll(".square"));
    function renderBoard(){     
        gameSquares.forEach((square) => {
            square.textContent = gameSquareValues[square.id];
        })
    }
    return {
        gameSquareValues,
        gameSquares,
        renderBoard
    }
})();

const player = (name, mark) => {
    function makeMark(e){
        if (e.target.textContent === ''){
            e.target.textContent = currentPlayer;
            gameSquareValues[e.target.id] = currentPlayer;
        }
        if (checkWin()){
            alert(`${currentPlayer} Wins!!!`);
        }
        else if (checkBoardFull()){
            alert(`It's a Tie.`);
        }
        else {
            currentPlayer = (currentPlayer) === 'X' ? 'O' : 'X';
            return;
        }
    }
    return {
        name: name,
        mark: mark,
        makeMark
    }
};
