import React from 'react'
import { LoremIpsum } from 'lorem-ipsum'
import './App.less'
import links from '../links.json'
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
    this.state = {}
    // this.updateMain = this.updateMain.bind(this)
    // this.projectContentBgTop = React.createRef()
    // this.projectContentBgBottom = React.createRef()
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

          <div className='text'>
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
            <svg xmlns='http://www.w3.org/2000/svg'className='bg-top' viewBox='0 0 1440 68' enableBackground='new 0 0 1440 68'>
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
          <svg xmlns='http://www.w3.org/2000/svg'className='bg-top' viewBox='0 0 1440 68' enableBackground='new 0 0 1440 68'>
            <path d='m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8' fill='#000' transform='translate(0-1977)'></path>
          </svg>
          <div className='content'>
            <div className='left'>
              <p>{lorem.generateSentences(2)}</p>
              <ul>
                <li><a href={links.github}>GitHub</a></li>
                <li><a href={links.linkedin}>LinkedIn</a></li>
                <li><a href={links.twitter}>Twitter</a></li>
              </ul>
            </div>
            <div className='center'>
              <p>{lorem.generateSentences(2)}</p>
              <ul>
                <li><a href='#about'>Impressum</a></li>
                <li><a href='#projects'>Contact</a></li>
              </ul>
            </div>
            <div className='right'>
              <p>{lorem.generateSentences(2)}</p>
              <ul>
                <li><a href='#'>1</a></li>
                <li><a href='#'>2</a></li>
                <li><a href='#'>3</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // componentDidMount() {
  //   window.addEventListener('resize', this.updateMain)
  //   this.updateMain()
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateMain)
  // }

  // updateMain() {
  //   const bgTopHeight = this.projectContentBgTop.current.getBoundingClientRect().height
  //   const bgBottomHeight = this.projectContentBgBottom.current.getBoundingClientRect().height
  //   console.log(bgBottomHeight)
  //   this.setState({
  //     projectContentStyle: {
  //       marginTop: bgTopHeight * -1 + 'px',
  //       marginBottom: bgBottomHeight * -1 + 'px',
  //     }
  //   })
  // }
}

export default App
