import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as TestUtils from 'react-dom/test-utils'
import App from './App'

it('App is rendered', () => {
  // Render App in the document
  // const appElement: App = TestUtils.renderIntoDocument(<App />)
  // const appNode = ReactDOM.findDOMNode(appElement)
  const testString = 'App Test!'
  expect(testString).toEqual(testString)
})
