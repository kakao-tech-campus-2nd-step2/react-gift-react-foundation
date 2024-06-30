import React from 'react'
import './App.css'

function App() {
  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1>{'FE 카카오 선물하기'}</h1>
        <p>{'react-gift-react-foundation 1주차 과제 (2024-06-24 ~ 2024-06-28)를 위한 프로젝트입니다.'}</p>
        <p>
          {'학습 일지는'}{' '}
          <a
            className={'App-link'}
            href={'https://www.notion.so/TIL-FE-25dbeb894e884b889eca0fa3e4e13904'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            {'여기'}
          </a>
          {'에서 확인할 수 있습니다.'}
        </p>
        <p>
          {'1주차 과제 진행 상황은'}{' '}
          <a
            className={'App-link'}
            href={'https://github.com/sugoring/react-gift-react-foundation'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            {'GitHub 저장소'}
          </a>
          {'에서 확인할 수 있습니다.'}
        </p>
      </header>
    </div>
  )
}

export default App
