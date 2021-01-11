import React, { useState, useEffect } from 'react';

function MoreInfo({ match }) {
    const [thisMovie, setThisMovieData] = useState();
    console.log(match.params.id);

    useEffect(() => {
        let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${match.params.id}`;
        let xml = new XMLHttpRequest();
        xml.open("GET", url, true);
        xml.onload = () => {
            console.log(xml.response);
        }
        xml.send();
    })

    return (
        <div className="container-fluid bg-secondary">
            <div className="row">
                <div className="col-12">
                    <span>You clicked me. How are you doing today!</span>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;