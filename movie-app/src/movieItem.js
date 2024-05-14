import React from "react";

export default function MovieItem(props) {

    return (
        <li className="movie-list-item w-25 m-auto">
            { props.item.title }
            <button className="btn btn-sm btn-danger float-end delete-button" onClick={() => props.deleteMovie(props.item.id)}>X</button>
            { props.getStars(props.item.rating) }
        </li>
    );
};