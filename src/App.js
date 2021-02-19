import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';

const App = () => {
  const [charactersInfo, setCharactersInfo] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
    axios
    .get('https://swapi.dev/api/people/')
    .then(res => setCharactersInfo(res.data))
    .catch(err=>console.log("Error: ",err))
  }, [])

  console.log(charactersInfo)


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters charactersInfo = {charactersInfo}/>
    </div>
  );
} 

export default App;
