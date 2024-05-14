import React, { useState } from 'react';

export default function MovieForm({ movies, setMovies }) {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

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

        // Skapar id och lägger till filmen i listan
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
        <div>
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
        </div>
    )
};
