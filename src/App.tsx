import React from 'react'
import { Global } from '@emotion/react'
import emotionReset from 'emotion-reset'

function App() {
  return (
    <>
      <Global styles={emotionReset} />
      <div className="App">
        <header className="App-header">
          <p>Hello World!</p>
          <a className="App-link" href="https://naver.com" target="_blank" rel="noopener noreferrer">
            GOGOGO
          </a>
        </header>
      </div>
    </>
  )
}

export default App
