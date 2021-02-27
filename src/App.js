import React, {useState} from 'react';
import './sayHello';
import Hello from './sayHello';
import Tweet from './Tweet';
import './App.css'

function App(){

  const [users, setUser] = useState([
    {name: 'Ed', message: 'Hello there'},
    {name: 'John', message: 'I am John Snow'},
    {name: 'traversy', message: 'Iam awesome'}
  ]);

  return(
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
