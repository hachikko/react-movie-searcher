import React, { useState, useEffect } from 'react';
import './Components.css';
import homeimg from '../images/homeImage.jpeg';
import { useHistory } from 'react-router-dom';

function Nav() {
    const [transform, setState] = useState(false);
    const searchHistory = useHistory(); 

    useEffect(() => {
        if(window.location.pathname === "/") {
            setState(false);
        }
        else if(window.location.pathname !== "/") {
            setState(true);
        }
    })
    
    function search(e) {
        let searchInput = document.querySelector("#searchInput").value;

        if(e.keyCode === 13) {
            setState(true);
            searchHistory.push(`/search/${searchInput.replace(/\s+/g, "-").toLowerCase()}`);
        }
    }
    
        return (
            <nav className={!transform ? "navbar navbar-dark bg-dark fixed-top h-100 navbar-expand-sm" : "navbar navbar-dark bg-dark sticky-top navbar-expand-sm"} style={!transform ? {background: `url(${homeimg})`} : {transition: "height 10s ease !important"}} id="navbar">
                <div className={!transform ? "container-fluid fixed-top mt-2" : "d-none"}>
                   <a href="#" className="navbar-brand mr-auto">Movie Searcher</a>
                   <div className="ml-auto d-flex align-items-center justify-content-center">
                           <button className="btn">
                                <span className="far fa-bookmark mr-2 text-white"></span>
                                <span className="d-none d-lg-inline text-white">Wish List</span>
                           </button>
                    </div>
                </div>
                <a href="#" className={!transform ? "navbar-brand mr-auto d-none" : "navbar-brand mr-auto"}>Movie Searcher</a>
                <div className="container mr-0 pr-0">
                     <div className="row-fluid d-flex justify-content-center w-100">
                        <div className="col-10">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text" style={!transform ? {background: "white", border: "none"} : {background: "#FFAE00", border: "none"}}>
                                        <span className={!transform ? "fa fa-search" : "fa fa-search text-white"}></span>
                                    </div>
                                </div>
                                <input type="text" id="searchInput" className={!transform ? "form-control pl-0 shadow-none" : "form-control"} onKeyDown={search} style={!transform ? {height: "60px", border: "none"} : {border: "none"}}
                                 spellCheck="false" autoComplete="off" placeholder="Search A Movie"/>
                            </div>
                        </div>
                        <div className={!transform ? "col d-none d-sm-flex align-items-center justify-content-center" : "col-2 d-flex align-items-center justify-content-center"}>
                           <button className={!transform ? "btn d-none" : "btn"} >
                                <span className="far fa-bookmark mr-2 text-white"></span>
                                <span className="d-none d-lg-inline text-white">Wish List</span>
                           </button>
                        </div>
                     </div>
                </div>
            </nav>
        );
}

export default Nav;
