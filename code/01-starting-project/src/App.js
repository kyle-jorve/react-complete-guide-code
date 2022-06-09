import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const api = 'https://swapi.dev/api/films/';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let content = 'No movies 🙁';

  const fetchMoviesHandler = useCallback(() => {
    setLoading(true);
    setError(false);

    fetch(api)
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }

        return res.json();
      })
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  if (error) {
    content = 'Hmm, something went wrong 🤔';
  }
  if (loading) {
    content = 'Loading...';
  }
  if (movies.length) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
