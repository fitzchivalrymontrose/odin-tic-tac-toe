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
            return gameBoard.gameSquareValues[el] === currentPlayer.mark;
        })
    });
}

function checkBoardFull(){
    let full = 0;
    gameBoard.gameSquareValues.forEach(el => {
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
    currentPlayer = player1;
    gameBoard.gameSquares.forEach((square) => {
        square.addEventListener('click', handleSquareClick);
    });
}
function handleSquareClick(e){
    let square = e.target;
    currentPlayer.makeMark(square, currentPlayer);
    currentPlayer = (currentPlayer) === player1 ? player2 : player1;
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
    name = name;
    mark = mark;
    
    function makeMark(position, currentPlayer){
        console.log(currentPlayer.name, currentPlayer.mark);
        let square = position;
        let mark = currentPlayer.mark;
        if (square.textContent === ''){
            square.textContent = mark;
            gameBoard.gameSquareValues[square.id] = mark;
        }
        if (checkWin()){
            alert(`${currentPlayer.name} Wins!!!`);
        }
        else if (checkBoardFull()){
            alert(`It's a Tie.`);
        }
        else {
            // console.log(currentPlayer.name, currentPlayer.mark);
            // currentPlayer = (currentPlayer) === player1 ? player2 : player1;
            // console.log(currentPlayer.name, currentPlayer.mark);
            return;
        }
        
    }

    return {
        name,
        mark,
        makeMark
    }
};

const player1 = player('Ken', 'X');
const player2 = player('computer', 'O');
// currentPlayer = player1;