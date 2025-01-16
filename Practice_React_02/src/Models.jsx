import { Fragment } from "react";

function Models({ data }) {
    const { img_url, name, rating, genre, watch_url } = data;

    return (
        <Fragment>
            <li>
                <div>
                    <img src={img_url} alt="Movie Poster" />
                </div>
                <h2>Name: {name}</h2>
                <h3>Rating: {rating}</h3>
                <p>Genre: {genre}</p>
                <a href={watch_url}>
                    <button>Play</button>
                </a>
            </li>
        </Fragment>
    );
}

export default Models;
