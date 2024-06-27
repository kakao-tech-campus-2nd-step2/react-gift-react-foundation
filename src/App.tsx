import './App.css';
import { Global } from '@emotion/react';
import resetStyle from '@/styles/resetStyle';

function App() {
  return (
    <div className="App">
      <Global styles={resetStyle} />
      안녕
    </div>
  );
}

export default App;
