import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <Button state="normal" size="small" colorType="black" onClick={handleClick}>
        버튼
      </Button><br/>
    </div>
  );
}

export default App;
