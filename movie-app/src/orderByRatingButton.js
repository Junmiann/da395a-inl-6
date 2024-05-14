import React from 'react';

export default function OrderByRatingButton({ movies, setMovies }) {
    const handleSortRating = () => {
        const sortedMoviesRating = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedMoviesRating);
    };

    return (
        <button className="btn btn-primary sort-button" onClick={handleSortRating}>Betygsordning</button>
    )
};
