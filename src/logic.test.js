import React from 'react';
import Logic from './logic.js'

// let sample = Logic();

// draw board
test('Logic draws a grid of a given size', () => {
    let sample = Logic(5);
    expect(sample.board.length).toBe(5);
    console.log(sample);
});
test('Logic draws a default grid of size 10', () => {
    let sample = Logic();
    expect(sample.board.length).toBe(10);
    console.log(sample);
});
