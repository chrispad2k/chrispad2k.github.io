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
      header: "I'm a enthusiastic Software Architect and Web Designer",
      text: lorem.generateSentences(2),
    },
  },
  main: {
    about: {
      text: lorem.generateParagraphs(5),
    },
  },
  links: {
    github: 'https://github.com/chrispad2k',
    linkedin: 'https://www.linkedin.com/in/christoph-pader-6ab7ba142',
    twitter: 'https://twitter.com/chrispad2k',
  },
}
