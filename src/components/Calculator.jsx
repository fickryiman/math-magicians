import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, addNewState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calc = (event) => {
    const newState = calculate(state, event.target.textContent);
    addNewState(newState);
  };

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={state.next || state.total || 0} disabled />
      <div className="calculator-keys">
        <button type="button" className="all-clear" value="all-clear" onClick={calc}>AC</button>
        <button type="button" className="plus-minus" value="plus-minus" onClick={calc}>+/-</button>
        <button type="button" className="percent" value="percent" onClick={calc}>%</button>
        <button type="button" className="operator" value="+" onClick={calc}>+</button>
        <button type="button" value="7" onClick={calc}>7</button>
        <button type="button" value="8" onClick={calc}>8</button>
        <button type="button" value="9" onClick={calc}>9</button>
        <button type="button" className="operator" value="*" onClick={calc}>x</button>
        <button type="button" value="4" onClick={calc}>4</button>
        <button type="button" value="5" onClick={calc}>5</button>
        <button type="button" value="6" onClick={calc}>6</button>
        <button type="button" className="operator" value="-" onClick={calc}>-</button>
        <button type="button" value="1" onClick={calc}>1</button>
        <button type="button" value="2" onClick={calc}>2</button>
        <button type="button" value="3" onClick={calc}>3</button>
        <button type="button" className="operator" value="/" onClick={calc}>÷</button>
        <button type="button" className="zero" value="0" onClick={calc}>0</button>
        <button type="button" className="decimal" value="." onClick={calc}>.</button>
        <button type="button" className="equal-sign" value="=" onClick={calc}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
