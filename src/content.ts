import { LoremIpsum } from 'lorem-ipsum'

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

export default {
  header: {
    logo: 'Christoph Pader',
    intro: {
      header: 'Work In Progress! 🤖',
      text: 'This website is still work in progress! New content is coming soon! 👏',
    },
  },
  main: {
    about: {
      header: `I am a passionate Software Developer and Musician with much ❤️ for Vienna and food`,
      text: `Hey there! I am a full stack software developer and tech student, based in Vienna. Artificial Intelligence and Cloud Computing are the topics that fascinate me most and that i most passionate about. Most of the time I am developing in TypeScript, ReasonML, C# and C++. I am currently working at "Atos IT Solutions Solutions GmbH" in Vienna as a Full Stack Developer. At the time, i am experimenting a lot with functional programming languages. In specific with ReasonML and frameworks such as Reason-React, Apollo and GraphQL`,
    },
  },
  links: {
    github: 'https://github.com/chrispad2k',
    linkedin: 'https://www.linkedin.com/in/christoph-pader-6ab7ba142',
    twitter: 'https://twitter.com/chrispad2k',
  },
}
