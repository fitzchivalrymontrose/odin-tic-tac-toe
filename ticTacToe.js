"use strict"

/*
State:
values of board squares - list//////////////////
what is displayed at any given time
player name and marker
whose turn it is
game active/inactive
    win/lose/draw

Logic:
create player
assign marker to player
update values of list
update what is displayed
change active player
start/end game
test active/inactive state
test win/lose/draw

*/

const gameSquareValues = [null, null, null, null, null, null, null, null, null, null];
const gameSquares = Array.from(document.querySelectorAll(".square"));
gameSquares.forEach((square) => {
    square.textContent = gameSquareValues[square.id];
})

let currentPlayer = 'X';
gameSquares.forEach((square) => {
    square.addEventListener('click', makeMark);
});

function makeMark(e){
    if (gameSquareValues[e.target.id] === null){
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
    
}

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

