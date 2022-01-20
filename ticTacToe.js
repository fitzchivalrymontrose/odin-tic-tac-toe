"use strict"

let gameSquareValues = ['', '', '', '', '', '', '', '', ''];
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
let currentPlayer = 'X';
const gameSquares = Array.from(document.querySelectorAll(".square"));
const startGame = document.querySelector('#start-btn');
startGame.addEventListener('click', handleStartGame);

function handleStartGame(){
    newGame();
}

function renderBoard(){
    gameSquares.forEach((square) => {
        square.textContent = gameSquareValues[square.id];
    })
}

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

function resetGameSquareValues(){
    gameSquareValues.fill('');
}

function newGame(){
    gameSquares.forEach((square) => {
        square.removeEventListener('click', makeMark);
    });
    resetGameSquareValues();
    renderBoard();
    currentPlayer = 'X';
    gameSquares.forEach((square) => {
        square.addEventListener('click', makeMark);
    });
}
