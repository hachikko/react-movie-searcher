import React, { useState, useEffect } from 'react';
import './Components.css';
import defaultimg from '../images/notfound-sm-v.svg';

function MoreInfo({ match }) {
    const [thisMovie, setMData] = useState(null);

    useEffect(() => {
        let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${match.params.id}`;
        let xml = new XMLHttpRequest();
        xml.open("GET", url, true);
        xml.onload = () => {
            fetchMovieData(xml.response);
        }
        xml.send();
    },[])

    function fetchMovieData(data) {
        setMData(data);
    }

    let tMovie = JSON.parse(thisMovie);
    let myMovie;
    let movieInfo;
    console.log(tMovie);

    if(thisMovie !== null) {
        myMovie =  (
                <>
                    <div className="card bg-transparent dFlex movie-card-show" style={{height: "80%", border: "none"}}>
                        <img src={tMovie.Poster !== "N/A" ? tMovie.Poster : defaultimg} className="img-fluid card-img mt-2 card-img-show" alt="Movie Image" />
                        <div className="card-body pl-0 pb-0">
                            <span className="card-title fpoppins-1" style={{color: "#f0f5f1"}}>{tMovie.Title}</span>
                        </div>
                    <div className="pt-5">
                        <button className="btn btn-outline-warning mb-2" onClick={() => window.history.back()}><i className="fa fa-arrow-left pr-2"></i>Go Back</button>
                    </div>
                    </div>
                </>
        );

        let movieEpisodes = (
            <>
                <div className="content-design dFlex justify-content-start">
                    <span className="tgrey pl-3 pr-3">Seasons</span>
                </div>
                <div className="dFlex justify-content-start">
                    <span className="torange-light pl-3 pr-3 fmont-0-9">{tMovie.totalSeasons}</span>
                </div>
            </>
        );

        movieInfo = (
                <div className='movie-details dFlexColSpaced'>
                        <div className="more-info plot" style={{overflow: "auto"}}>
                            <div className="col-12 px-0" style={{cursor: "pointer"}}>
                                <span data-target="#plot" data-toggle="collapse" className="d-flex card-header align-items-center justify-content-between">
                                    <span className="text-white float-left fmont-1-2">Plot</span>
                                    <span className="open-btn dFlex"><i className="fa fa-arrow-down float-right text-white"></i></span>
                                </span>
                            </div>
                            <div className="col-12 p-0">
                                <div id="plot" className="card bg-transparent collapse" style={{border: "none"}}>
                                    <div className="card-body py-2">
                                        <span className="text-white fmont-1">{tMovie.Plot}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-info genre" style={{overflow: "auto"}}>
                            <div className="col-12 dFlex justify-content-start w-100 h-100">
                                <div className="content-design dFlex justify-content-start">
                                    <span className="text-white pl-2 pr-3 fmont-1-1">Genre</span>
                                </div>
                                <div className="genre-info pl-3 w-100 h-100 dFlex justify-content-start">
                                    <span className="torange-light fmont-0-9">{tMovie.Genre}</span>
                                </div>
                            </div>
                        </div>
                        <div className="more-info rating">
                            <div className="col-12 dFlex justify-content-start w-100 h-100">
                                <div className="content-design dFlex justify-content-start">
                                    <span className="text-white pl-2 pr-3 fmont-1-1">Rating</span>
                                </div>
                                <div className="genre-info pl-3 w-100 h-100 dFlex justify-content-start">
                                    <span className="torange-light fmont-0-9">{tMovie.imdbRating} / 10</span>
                                </div>
                            </div>
                        </div>
                        <div className="more-info actors" style={{overflow: "auto"}}>
                            <div className="col-12 px-0" style={{cursor: "pointer"}}>
                                <span data-target="#actors" data-toggle="collapse" className="d-flex card-header align-items-center justify-content-between">
                                    <span className="text-white float-left fmont-1-2">Actors</span>
                                    <span className="open-btn dFlex"><i className="fa fa-arrow-down float-right text-white"></i></span>
                                </span>
                            </div>
                            <div className="col-12 p-0">
                                <div id="actors" className="card bg-transparent collapse" style={{border: "none"}}>
                                    <div className="card-body pt-2">
                                        <span className="text-white fmont-1">{tMovie.Actors}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-info language">
                            <div className="col-12 dFlex justify-content-start w-100 h-100">
                                <div className="content-design dFlex justify-content-start">
                                    <span className="text-white pl-2 pr-3 fmont-1-1">Language</span>
                                </div>
                                <div className="genre-info pl-3 w-100 h-100 dFlex justify-content-start">
                                    <span className="torange-light fmont-0-9">{tMovie.Language}</span>
                                </div>
                            </div>
                        </div>
                        <div className="more-info type">
                            <div className="col-12 dFlex justify-content-start w-100 h-100">
                                <div className="content-design dFlex justify-content-start">
                                    <span className="text-white pl-2 pr-3 fmont-1-1">Type</span>
                                </div>
                                <div className="genre-info pl-3 w-100 h-100 dFlex justify-content-start">
                                    <div className="content-design dFlex justify-content-start">
                                        <span className="torange-light pl-2 pr-3 fmont-0-9">{tMovie.Type}</span>
                                    </div>
                                    <div className="content-design dFlex justify-content-start">
                                        <span className="tgrey pl-3 pr-3">Runtime</span>
                                    </div>
                                    <div className="content-design dFlex justify-content-start">
                                        <span className="torange-light pl-3 pr-3 fmont-0-9">{tMovie.Runtime}</span>
                                    </div>
                                    {tMovie.Type === "series" ? movieEpisodes : null}
                                </div>
                            </div>
                        </div>
                        <div className="more-info year">
                            <div className="col-12 dFlex justify-content-start w-100 h-100">
                                <div className="content-design dFlex justify-content-start">
                                    <span className="text-white pl-2 pr-3 fmont-1-1">Realsed</span>
                                </div>
                                <div className="genre-info pl-3 w-100 h-100 dFlex justify-content-start">
                                    <span className="torange-light fmont-0-9">{tMovie.Released}</span>
                                </div>
                            </div>
                        </div>
                </div>
        )
    }

    return (
        <div className="container-fluid" style={{background: "#4a4949", height: "91.5vh"}}>
            <div className="row" style={{height: "100%"}}>
                <div className="col-12 col-xl-4 dFlex" style={{height: "100%", overflow: "auto"}}>
                    {myMovie}
                </div>
                <div className="col-12 col-xl-8 dFlexCol" style={{background: "#3a3838", height: "100%"}}>
                    {movieInfo}
                    <div className="container">
                        {thisMovie !== null ? <a href={`https://www1.cmovies.ac/movie/search/${tMovie.Title.replace(/\s+/g, "-").replace(/[:+|?]/g, "").toLowerCase()}`} target="_blank" rel="noopener" className="btn btn-outline-warning float-right mt-4" style={{paddingLeft: "40px", paddingRight: "40px"}}><i className="fa fa-play pr-2"></i>Watch {tMovie.Type}</a> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;