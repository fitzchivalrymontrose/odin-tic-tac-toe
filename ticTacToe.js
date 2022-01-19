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


const gameSquareValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const gameSquares = Array.from(document.querySelectorAll(".square"));
gameSquares.forEach((square) => {
    square.textContent = gameSquareValues[square.id];
})