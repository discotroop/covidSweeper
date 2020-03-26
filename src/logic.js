import React from 'react';

function Logic(gridSize) {
    const gameBoard = [];
    function drawBoard(gridSize) {
        if(gridSize) {
            for (let i = 0; i < gridSize; i++) {
                gameBoard.push(new Array(gridSize))
            }
        } else {
            for (let i = 0; i < 10; i++) {
                gameBoard.push(new Array(10));
            }
        }
    return gameBoard;
    }


  return {
      board: drawBoard(gridSize),
  }
}

export default Logic;
