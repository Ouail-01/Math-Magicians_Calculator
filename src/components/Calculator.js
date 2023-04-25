/* eslint-disable */
import React from 'react';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="calc-display">
        0
      </div>
      <div className="calc-keys">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="or-color">+</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="or-color">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="or-color">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="or-color">+</button>
        <button type="button" className="l-key">0</button>
        <button type="button">.</button>
        <button type="button" className="or-color">=</button>

      </div>

    </div>
  );
}

export default Calculator;