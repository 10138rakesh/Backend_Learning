import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {

    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="App">
      <h1>Jokes</h1>

      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;