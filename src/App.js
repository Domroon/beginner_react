import React from 'react';
import './sayHello';
import Hello from './sayHello';
import Tweet from './Tweet';

function App(){
  return(
    <div>
      <h1>THis is the App component</h1>
      <Hello />
      <Tweet />
    </div>
  );
}

export default App;
