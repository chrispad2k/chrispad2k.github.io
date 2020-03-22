import React from 'react'
import { LoremIpsum } from 'lorem-ipsum'
import './App.less'

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
      <div className='header area' id='header'>
        <div className='header-back' />
        <h1>Christoph Pader</h1>
      </div>
      {/* <div className='sidebar area' id='sidebar' /> */}
      <div className='main area' id='main'>
        <p>{lorem.generateParagraphs(5)}</p>

        <p>{lorem.generateParagraphs(5)}</p>
      </div>
      <div className='footer area' id='footer' />
    </div>
  )
}

export default App
