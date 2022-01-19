"use strict"

/*
State:
values of board squares - list
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


const gameSquareValues = ['', '', '', '', '', '', '', '', '', ''];
const gameSquares = Array.from(document.querySelectorAll(".square"));
gameSquares.forEach((square) => {
    square.textContent = gameSquareValues[square.id];
})

/*

player {
    name,
    marker (X or O),

    function placeMarker(){

    }
}

*/
let currentPlayer = 'X';
gameSquares.forEach((square) => {
    square.addEventListener('click', makeMark);
});

function makeMark(e){
    if (e.target.textContent === ''){
        e.target.textContent = currentPlayer;
        currentPlayer = (currentPlayer) === 'X' ? 'O' : 'X';
    }
    checkWinLoseDraw();
}

function checkWinLoseDraw(){
    // if win condition >>> player wins
    // else if board full >>> draw game
    // else continue playing
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