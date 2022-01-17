"use strict"

// const gameSquares = document.querySelectorAll(".square");

// gameSquares.forEach((square) => {
//     square.addEventListener('click', placeMark);
// });

// function placeMark(e){
//     console.log(e.target);
// }

const gameBoard = (() => {
    const gameSquareValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const gameSquares = document.querySelectorAll(".square");


    function updateDisplay(){
        gameSquareValues.forEach((square) => {
            let boardSquare = document.querySelector(`#square-${gameSquareValues.indexOf(square)}`);
            boardSquare.textContent = square;
        });
    }
    return {updateDisplay}
})();

gameBoard.updateDisplay();