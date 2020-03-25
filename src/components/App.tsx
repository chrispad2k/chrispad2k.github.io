import React from 'react'
import { LoremIpsum } from 'lorem-ipsum'
import './App.less'
import circleLeft from '../../public/images/circle-left.svg'
import circleRight from '../../public/images/circle-right.svg'

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

class App extends React.Component {
  // private headerText: React.RefObject<HTMLInputElement>

  constructor(props) {
    super(props)
    // this.updateHeader = this.updateHeader.bind(this)
    // this.headerTextRef = React.createRef()
    // this.state = { headerTextStyle: {} }
  }

  render() {
    return (
      <div className='app'>
        <section className='header' id='header'>
          <img className='circle-left' src={circleLeft} />
          <img className='circle-right' src={circleRight} />

          <h1 className='logo'>Christoph Pader</h1>

          <nav>
            <ul>
              <li><a href='#about'>About Me</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>

          <div className='text' /* ref={this.headerTextRef} */ /* style={this.state.headerTextStyle} */>
            <h2>Software Developer</h2>
            <p>{lorem.generateSentences(3)}</p>
          </div>
        </section>
        {/* <div className='sidebar' id='sidebar' /> */}
        <section className='main' id='main'>
          <section id='about'>
            <div className='content'>
              <h2>About Me</h2>
              <p>{lorem.generateParagraphs(3)}</p>
            </div>
          </section>

          <section id='projects'>
            <svg xmlns='http://www.w3.org/2000/svg' className='bg-top' viewBox='0 0 1440 68' enableBackground='new 0 0 1440 68'>
              <path d='m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8' fill='#000' transform='translate(0-1977)'></path>
            </svg>

            <div className='content'>
              <h2>Projects</h2>
              <p>{lorem.generateParagraphs(5)}</p>
            </div>

            <svg xmlns='http://www.w3.org/2000/svg' className='bg-bottom' viewBox='0 0 1440 68' enableBackground='new 0 0 1440 68'>
              <path d='m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8' fill='#000' transform='translate(0-1977)'></path>
            </svg>
          </section>

          <section id='contact'>
            <div className='content'>
              <h2>Contact</h2>
              <p>{lorem.generateParagraphs(3)}</p>
            </div>
          </section>
        </section>
        <section className='footer' id='footer'>
          <p>Footer</p>
        </section>
      </div>
    )
  }

  // componentDidMount() {
  //   window.addEventListener('resize', this.updateHeader)
  //   this.updateHeader()
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateHeader)
  // }

  // updateHeader() {
  //   this.setState({ headerTextStyle: { top: `calc(100vw * (886/1920) - ${this.headerTextRef.current.offsetHeight}px)` } })
  // }
}

export default App
