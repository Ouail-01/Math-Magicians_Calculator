import React, { useState, useCallback } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({

    total: 0,
    next: null,
    operation: null,
  });

  const onChangeHandler = useCallback((e) => {
    const result = calculate(state, e.target.innerText);
    setState(result);
  },
  [state]);

  const { total, next, operation } = state;
  return (
    <>
      <div className="calc-container">
        <h1>Let&apos;s do some Math!</h1>
        <div className="calculator-container">
          <div className="calc-display">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </div>
          <div className="calc-keys">
            <button type="button" onClick={onChangeHandler}>AC</button>
            <button type="button" onClick={onChangeHandler}>%</button>
            <button type="button" onClick={onChangeHandler}>+/-</button>
            <button type="button" className="or-color" onClick={onChangeHandler}>÷</button>
            <button type="button" onClick={onChangeHandler}>7</button>
            <button type="button" onClick={onChangeHandler}>8</button>
            <button type="button" onClick={onChangeHandler}>9</button>
            <button type="button" className="or-color" onClick={onChangeHandler}>x</button>
            <button type="button" onClick={onChangeHandler}>4</button>
            <button type="button" onClick={onChangeHandler}>5</button>
            <button type="button" onClick={onChangeHandler}>6</button>
            <button type="button" className="or-color" onClick={onChangeHandler}>-</button>
            <button type="button" onClick={onChangeHandler}>1</button>
            <button type="button" onClick={onChangeHandler}>2</button>
            <button type="button" onClick={onChangeHandler}>3</button>
            <button type="button" className="or-color" onClick={onChangeHandler}>+</button>
            <button type="button" className="l-key" onClick={onChangeHandler}>0</button>
            <button type="button" onClick={onChangeHandler}>.</button>
            <button type="button" className="or-color" onClick={onChangeHandler}>=</button>

          </div>

        </div>
      </div>
    </>
  );
}

export default Calculator;
