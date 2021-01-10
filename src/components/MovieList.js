import React, { useState, useEffect } from 'react';
import './Components.css';

function MovieList(props) {
    const [movieData, setMovieData] = useState(null);

    
    useEffect(() => {
        let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${props.searchValue.replace(/-+/g, " ")}`;
        let xml = new XMLHttpRequest();
        xml.open("GET", url, true);
        xml.onload = () => {
            fetchData(xml.response);
        }
        xml.send();
    })

    function fetchData(data) {
        setMovieData(data);
    }

    let movie = JSON.parse(movieData);
    let movies = movieData !== null ? movie.Search.map((movie) => {
            return (
                <div key={movie.imdbID} className="card">
                    <img src={movie.Poster} alt={`Movie: ${movie.Title}`} width="100" className="img-responsive card-img" />
                    <div className="card-body">
                        <div className="card-title">
                            <span>{movie.Title}</span>
                        </div>
                    </div>
                </div>
            );
    }) : <div></div>;

    return (
        <div className="container-fluid" style={{paddingTop: "20px", minHeight: "91.5vh"}}>
            <div className="row px-0 d-flex align-items-center justify-content-center">
                <div className="col-12 mb-1">
                    <span style={{font: "1em Poppins, sans-serif"}}>Search Results for {props.searchValue.replace(/-+/g, " ")}</span>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <div className="movie-list-container">
                        {movieData !== null ? movies : <div></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieList;