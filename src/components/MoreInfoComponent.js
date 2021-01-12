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
        )
    }

    return (
        <div className="container-fluid" style={{background: "#4a4949", height: "91.5vh"}}>
            <div className="row" style={{height: "100%"}}>
                <div className="col-12 col-xl-4 dFlex" style={{height: "100%", overflow: "auto"}}>
                    {myMovie}
                </div>
                <div className="col-12 col-xl-8 dFlexCol" style={{background: "#3a3838", height: "100%"}}>
                    <div className='movie-details dFlexColSpaced'>
                        <div className="more-info plot">

                        </div>
                        <div className="more-info genre">

                        </div>
                        <div className="more-info rating">

                        </div>
                        <div className="more-info actors">

                        </div>
                        <div className="more-info language">

                        </div>
                        <div className="more-info type">

                        </div>
                        <div className="more-info year">

                        </div>
                    </div>
                    <div className="container">
                        {thisMovie !== null ? <a href={`https://www1.cmovies.ac/movie/search/${tMovie.Title.replace(/\s+/g, "-").replace(/[:+|?]/g, "").toLowerCase()}`} target="_blank" rel="noopener" className="btn btn-outline-warning float-right mt-4" style={{paddingLeft: "40px", paddingRight: "40px"}}><i className="fa fa-play pr-2"></i>Watch {tMovie.Type}</a> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;