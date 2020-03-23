import React from 'react'
import { LoremIpsum } from 'lorem-ipsum'
import './App.less'
import circleLeft from '../../public/images/circle-left.svg';
import circleRight from '../../public/images/circle-right.svg';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

function App() {
  return (
    <div className='app'>
      <div className='header' id='header'>
        <img className='circle-left' src={circleLeft} />
        <img className='circle-right' src={circleRight} />

        <div className='top'>
          <h1 className='logo'>Christoph Pader</h1>

          <nav>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Me</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className='text'>
          <h2>Software Developer</h2>
          <p>{lorem.generateParagraphs(1)}</p>
        </div>
      </div>
      {/* <div className='sidebar' id='sidebar' /> */}
      <div className='main' id='main'>
        <p>{lorem.generateParagraphs(5)}</p>

        <p>{lorem.generateParagraphs(5)}</p>
      </div>
      <div className='footer' id='footer' />
    </div>
  )
}

export default App
