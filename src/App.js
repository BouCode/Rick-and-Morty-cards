import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/card';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState ({characters: []});

  useEffect ( () => {
    axios.get ('https://rickandmortyapi.com/api/character')
    .then ( res => {
      setPosts ({characters: res.data.results})
      console.log (res)
    })
    .catch (
      error => console.log (error)
    )
  }, [])
  	return (<div>
      <section className = "container my-4">
        <div className = "row my-4">
          {
            posts.characters.map ( (character, index) => (
              <Cards character ={character} key = {index} />
            ))
          }
        </div>
      </section>
    </div>
    );
}

export default App;
