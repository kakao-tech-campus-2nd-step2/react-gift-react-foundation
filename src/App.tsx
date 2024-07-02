// src/App.tsx
import React from 'react';
import { Global } from '@emotion/react';
import globalStyles from '@styles/globalStyles'; // 글로벌 스타일 import
import logo from './logo.svg';
import './App.css';
import { Button } from '@stories/Button';
import { PrimaryArgs } from '@stories/Button.stories';

function App() {
    return (
        <div className="App">
            <Global styles={globalStyles} />
            <Button {...PrimaryArgs} />
        </div>
    );
}

export default App;
