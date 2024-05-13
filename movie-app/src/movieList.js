import React, { useState } from 'react';
import Movies from './movies';
import OrderByAlphaButton from './orderByAlphaButton';
import OrderByRatingButton from './orderByRatingButton';

export default function MovieForm() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "") {
            alert("Du måste ange en titel för att kunna spara filmen");
            return;
        }

        if (rating === "") {
            alert("Du måste ange ett betyg för att kunna spara filmen")
            return;
        }

        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

        setMovies([...movies, {
            id: newId,
            title: title,
            rating: rating,
        }]);

        // Återställer formuläret
        setTitle("");
        setRating("");
    }

    return (
        <div className="container">
            <form id="movie-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Lägg till en film</legend>

                    <div className="form-group">
                        <label htmlFor="title-field">Titel</label>
                        <input type="text" className="form-control w-25 p-2 m-auto" id="title-field" aria-describedby="titleHelp" placeholder="Ange titel här" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <label htmlFor="rating-field" id="rating-field-label">Betyg</label>
                    <select className="form-select w-25 p-2 m-auto" id="rating-field" aria-label="Default select" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option defaultValue>Välj betyg här</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" className="btn btn-success mt-3" value="Spara film" />
                </fieldset>
            </form>

            <h2>Inlagda filmer</h2>
            <Movies movies={movies} setMovies={setMovies} />
            <div className="sort-button w-25 m-auto">
                <OrderByAlphaButton movies={movies} setMovies={setMovies} />
                <OrderByRatingButton movies={movies} setMovies={setMovies} />
            </div>
        </div>
    )
};
