import React from 'react'
import { LoremIpsum } from 'lorem-ipsum'
import './App.less'
import content from '../content'
import CircleLeft from '../../public/images/circle-left.svg'
import CircleRight from '../../public/images/circle-right.svg'
import MainWaveTop from '../../public/images/main-wave-top.svg'
import MainWaveBottom from '../../public/images/main-wave-bottom.svg'
import FooterWave from '../../public/images/footer-wave.svg'

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
          <CircleLeft className='circle-left' />
          <CircleRight className='circle-right' />

          <h1 className='logo'>{content.header.logo}</h1>

          <nav>
            <ul>
              <li><a href='#about'>About Me</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>

          <div className='text'>
            <h2>{content.header.intro.header}</h2>
            <p>{content.header.intro.text}</p>
          </div>
        </section>
        {/* <div className='sidebar' id='sidebar' /> */}
        <section className='main' id='main'>
          <section id='about'>
            <div className='content'>
              <h2>About Me</h2>
              <p>{content.main.about.text}</p>
            </div>
          </section>

          <section id='projects'>
            <MainWaveTop className='bg-top curve' />

            <div className='content'>
              <h2>Projects</h2>
              <p>{lorem.generateParagraphs(5)}</p>
            </div>

            <MainWaveBottom className='bg-bottom curve' />
          </section>

          <section id='contact'>
            <div className='content'>
              <h2>Contact</h2>
              <p>{lorem.generateParagraphs(3)}</p>
            </div>
          </section>
        </section>
        <section className='footer' id='footer'>
          <FooterWave className='curve' />
          <div className='content'>
            <div className='left'>
              <p>{lorem.generateSentences(2)}</p>
              <ul>
                <li><a href={content.links.github}>GitHub</a></li>
                <li><a href={content.links.linkedin}>LinkedIn</a></li>
                <li><a href={content.links.twitter}>Twitter</a></li>
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
