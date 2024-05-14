import React, { useState } from 'react';
import MovieForm from './movieForm';
import Movies from './movies';
import OrderByAlphaButton from './orderByAlphaButton';
import OrderByRatingButton from './orderByRatingButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <MovieForm movies={movies} setMovies={setMovies} />
      
      <h2>Inlagda filmer</h2>
      <Movies movies={movies} setMovies={setMovies} />
      
      <div className="sort-button w-25 m-auto">
        <OrderByAlphaButton movies={movies} setMovies={setMovies} />
        <OrderByRatingButton movies={movies} setMovies={setMovies} />
      </div>
    </div>
  );
}

export default App;