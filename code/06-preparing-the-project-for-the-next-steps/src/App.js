import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

const fbapi = 'https://react-udemy-course-c204b-default-rtdb.firebaseio.com/';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMoviesHandler = useCallback(() => {
    setLoading(true);
    setError(null);

    fetch(`${fbapi}movies.json`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }

        return res.json();
      })
      .then(data => {
        let movies = [];

        for (let key in data) {
          movies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate
          })
        }

        setMovies(movies);
      })
      .catch(err => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    fetch(`${fbapi}movies.json`, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }

        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
        setError(true);
      })
  }

  let content = <p>Found no movies.</p>;

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
