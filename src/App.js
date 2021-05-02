import { React } from 'react';
import Calculator from './components/Calculator';
import gitHubIcon from './icons/GitHub-Mark-Light-64px.png';
import linkedIn from './icons/LI-In-Bug.png';

function App() {
  return (
    <div className='App'>
      <div className='text-content'>
        <h1>The Calculator</h1>
        <p>
          <strong>Welcome to The Calculator</strong>, this is a personal project
          to show off fundamental skills of <span>React</span> and
          <span> JavaScript</span>
        </p>

        <div className='history-content'>
          <p>
            The first handheld, mechanic calculator was invented in 1945 by Curt
            Herzstark from a design he had created in 1938.
          </p>
          <p>
            The Curta calculators, which were shaped like a pepper grinder, were
            produced until 1970, when a Japanese company invented the first
            digital calculator
          </p>
        </div>
      </div>
      <div className='calc-and-icons'>
        <Calculator className='calculator' />
        <div className='icons'>
          <a href='https://github.com/Vippsi' target='_blank' rel='noreferrer'>
            <img src={gitHubIcon} alt='GitHub' />
          </a>
          <a
            href='https://www.linkedin.com/in/jonathanthornton/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedIn} alt='LinkedIn' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
