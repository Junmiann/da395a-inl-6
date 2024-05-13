import React from "react";
import MovieItem from './movieItem';

export default function Movies({ movies, setMovies }) {
    const getStars = (nr_of_stars) => {
        const stars = [];
        for (let i = 0; i < nr_of_stars; i++) {
            stars.push(<img src="./star.png" alt="Star" className="star-icon float-end" />);
        }
        return stars;
    }

    const deleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    return (
        <ul className="movies">
            {movies.map(movie => <MovieItem key={movie.id} item={movie} getStars={getStars} deleteMovie={deleteMovie} />)}
        </ul>
    );
}