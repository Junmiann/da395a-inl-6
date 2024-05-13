import React from 'react';

export default function OrderByAlphaButton({ movies, setMovies }) {
    const handleSortAlphabetically = () => {
        const sortedMoviesAlpha = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMoviesAlpha);
    };

    return (
        <button className="btn btn-primary sort-button" onClick={handleSortAlphabetically}>Alfabetisk ordning</button>
    )
}
