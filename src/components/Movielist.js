import React, { useState } from "react";
import { Resultcard } from "./Resultcard";

export const Movielist = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=!&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <div className="movielist-page">
      <div className="search-content">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search movie"
            value={query}
            onChange={onChange}
          ></input>
        </div>
        {results.length > 0 && (
          <ul className="results">
            {results.map((movie) => (
              <li key={movie.id}>
                <Resultcard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="container">
        <div className="movie-content"></div>
      </div>
    </div>
  );
};
