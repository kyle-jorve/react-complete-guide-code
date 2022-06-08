import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph(prevState => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraphHandler}>Toggle Dat Paragraph Ya Dumb Ho</Button>
      <DemoOutput show={showParagraph}/>
    </div>
  );
}

export default App;
