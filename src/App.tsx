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
    <div className="app">
      <div className="header area" id="header" />
      <div className="sidebar area" id="sidebar" />
      <div className="main area" id="main">
        {lorem.generateParagraphs(20)}
      </div>
      <div className="footer area" id="footer" />
    </div>
  )
}

export default App
