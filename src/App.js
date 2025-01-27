import React, { useState, useEffect} from 'react';
import Character from './components/Character';
import axios from 'axios';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const mainBody = document.querySelector("body")
  mainBody.style.background = "linear-gradient(to right, #3f505a, #1F2935)"


  useEffect(() => {
  axios.get("https://swapi.dev/api/people/")
  .then(res => {
    console.log(res.data)
    setCharacters(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  }, []);


  return (
    <div className="App">
        <Character characters={characters} setCharacters={setCharacters} />
    </div>
  )
}

export default App;
