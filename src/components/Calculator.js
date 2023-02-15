/* eslint-disable */
import React, {Component} from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
        }
    }
    onChangeHandler = (e) => {
        const result = calculate(this.state, e.target.innerText);
        this.setState(result);
    }

    displayResult = (e) => {
        this.setState({
            total: e.target.innerText,
        });
    }


    render() {
        const {total, next, operation } = this.state;
        return (
            <div className="calculator-container">
                <div className="calc-display" onClick={this.displayResult}>{total || next || operation || 0}</div>
                <div className="calc-keys">
                    <button type="button" onClick={this.onChangeHandler}>AC</button>
                    <button type="button" onClick={this.onChangeHandler}>+/-</button>
                    <button type="button" onClick={this.onChangeHandler}>%</button>
                    <button type="button" className="or-color" onClick={this.onChangeHandler}>÷</button>
                    <button type="button" onClick={this.onChangeHandler}>7</button>
                    <button type="button" onClick={this.onChangeHandler}>8</button>
                    <button type="button" onClick={this.onChangeHandler}>9</button>
                    <button type="button" className="or-color" onClick={this.onChangeHandler}>x</button>
                    <button type="button" onClick={this.onChangeHandler}>4</button>
                    <button type="button" onClick={this.onChangeHandler}>5</button>
                    <button type="button" onClick={this.onChangeHandler}>6</button>
                    <button type="button" className="or-color" onClick={this.onChangeHandler}>-</button>
                    <button type="button" onClick={this.onChangeHandler}>1</button>
                    <button type="button" onClick={this.onChangeHandler}>2</button>
                    <button type="button" onClick={this.onChangeHandler}>3</button>
                    <button type="button" className="or-color" onClick={this.onChangeHandler}>+</button>
                    <button type="button" className="l-key" onClick={this.onChangeHandler}>0</button>
                    <button type="button" onClick={this.onChangeHandler}>.</button>
                    <button type="button" className="or-color" onClick={this.onChangeHandler}>=</button>

                </div>

            </div>
        )
    }
}

export default Calculator;
