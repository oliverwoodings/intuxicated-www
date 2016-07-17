import React from 'react'
import { render } from 'react-dom'
import './styles/global.css'

const container = document.createElement('div')
document.body.appendChild(container)

renderRoot()

if (module.hot) {
  module.hot.accept('./views/App', renderRoot)
}

function renderRoot () {
  const App = require('./views/App').default

  render(<App />, container)
}
