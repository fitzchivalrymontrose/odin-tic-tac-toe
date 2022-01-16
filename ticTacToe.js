"use strict"

const gameSquareValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const gameSquares = document.querySelectorAll(".square");
gameSquares.forEach((square) => {
    square.addEventListener('click', placeMark);
});

function placeMark(e){
    console.log(e.target);
}

// display gameSqareValues list values onto board squares
gameSquareValues.forEach((square) => {
    document.querySelector(`#square-${gameSquareValues.indexOf(square)}`).textContent = square;
});

