import React from 'react';
import './sayHello';
import Hello from './sayHello';
import Tweet from './Tweet';
import './App.css'

function App(){
  return(
    <div className="app" message="This is a random message">
      <Tweet name="Dev ED" message="Whats up"/>
      <Tweet name="John Snow" message="i am the true king"/>
      <Tweet name="Traversy Media" message="Yesss 400k!"/>
      <Tweet name="Mosh" message="Nochmal dabei sein nochmal!!"/>
    </div>
  );
}

export default App;
