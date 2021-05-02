import { React, useState } from 'react';

function Calculator() {
  const [calc, setCalc] = useState('');
  const [errors, setErrors] = useState('');

  const onClick = (button) => {
    if (button === '=') {
      performCalc();
    } else if (button === 'C') {
      reset();
    } else if (button === 'CE') {
      backspace();
    } else {
      if (calc.length >= 12) {
        console.log(calc.length);
        reset();
        setErrors('12 digits max');
      } else {
        setCalc(calc + button);
      }
    }
  };

  const performCalc = () => {
    try {
      setCalc((eval(calc) || '') + '');
    } catch (e) {
      reset();
      setErrors('error');
    }
  };

  const backspace = () => {
    setCalc(calc.slice(0, -1));
  };

  const reset = () => {
    setCalc('');
    setErrors('');
  };

  return (
    <div>
      <div className='calculator-body'>
        <div className='calculator-screen'>{calc || errors}</div>
        <div className='logo-div'>
          <button
            onClick={() => (window.location.href = 'https://vippsi.dev/')}
            className='vipp-button logo'
          >
            Vippsi
          </button>
        </div>
        <div className='calc-keys'>
          <button
            className='calc-button clear-button'
            name='C'
            onClick={(e) => onClick(e.target.name)}
          >
            C
          </button>
          <button
            className='calc-button'
            name='CE'
            onClick={(e) => onClick(e.target.name)}
          >
            CE
          </button>
          <button
            className='calc-button'
            name='÷'
            onClick={(e) => onClick(e.target.name)}
          >
            ÷
          </button>
          <button
            className='calc-button'
            name='*'
            onClick={(e) => onClick(e.target.name)}
          >
            &times;
          </button>
          <button
            className='calc-button'
            name='7'
            onClick={(e) => onClick(e.target.name)}
          >
            7
          </button>
          <button
            className='calc-button'
            name='8'
            onClick={(e) => onClick(e.target.name)}
          >
            8
          </button>
          <button
            className='calc-button'
            name='9'
            onClick={(e) => onClick(e.target.name)}
          >
            9
          </button>
          <button
            className='calc-button'
            name='-'
            onClick={(e) => onClick(e.target.name)}
          >
            -
          </button>
          <button
            className='calc-button'
            name='4'
            onClick={(e) => onClick(e.target.name)}
          >
            4
          </button>
          <button
            className='calc-button'
            name='5'
            onClick={(e) => onClick(e.target.name)}
          >
            5
          </button>
          <button
            className='calc-button'
            name='6'
            onClick={(e) => onClick(e.target.name)}
          >
            6
          </button>
          <button
            className='calc-button'
            name='+'
            onClick={(e) => onClick(e.target.name)}
          >
            +
          </button>
          <button
            className='calc-button'
            name='1'
            onClick={(e) => onClick(e.target.name)}
          >
            1
          </button>
          <button
            className='calc-button'
            name='2'
            onClick={(e) => onClick(e.target.name)}
          >
            2
          </button>
          <button
            className='calc-button'
            name='3'
            onClick={(e) => onClick(e.target.name)}
          >
            3
          </button>
          <button
            className='calc-button equal-sign'
            name='='
            onClick={(e) => onClick(e.target.name)}
          >
            =
          </button>
          <button
            className='calc-button zero-button'
            name='0'
            onClick={(e) => onClick(e.target.name)}
          >
            0
          </button>
          <button
            className='calc-button'
            name='.'
            onClick={(e) => onClick(e.target.name)}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
