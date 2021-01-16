import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/translucent.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/dist/tippy.css';

function WishList() {
    let bookmarkedData;
    
    if(localStorage.getItem("wishlist_data")) {
        bookmarkedData = JSON.parse(localStorage.getItem("wishlist_data")).map((data) => {
            return (
                <Link to={`/id/${data.imdbID}`} className="t-decoration-none">
                    <div className="row mb-1">
                        <div className="media pl-2 py-2 w-100 media-row" style={{background: "#222223", border: "none", borderBottom: "1.5px solid #1e1e1e"}}>
                            <img src={data.poster} className="img-fluid rounded" style={{width: "100px", height: "100px"}} />
                            <div className="media-body dFlex" style={{height: "100%"}}>
                                <div className="col-8 h-100 px-0">
                                    <div className="col-12 pl-4">
                                        <Tippy content={data.title} theme="translucent" placement="right" interactiveBorder={20} className="fmont-0-8">
                                            <span className="fmont-1-1 mt-2 torange-light">{data.title.length >= 19 ? data.title.replace(data.title.substring(16, data.title.length), "...") : data.title}</span>
                                        </Tippy>
                                    </div>
                                    <div className="col-12 pl-4">
                                        <span className="text-white fmont-1-1 wishlist-plot">{data.plot}</span>
                                    </div>
                                </div>
                                <div className="col-4 h-100 px-0 mx-0 d-flex delete-btn align-items-center justify-content-center flex-column flex-md-row">
                                    <div className="col-12 col-md-4 b-notification dFlex">
                                        <Tippy theme="translucent" interactiveBorder={30} content="Added To WishList">
                                            <i className="fas fa-bookmark text-primary"></i>
                                        </Tippy>
                                    </div>
                                    <div className="col-12 col-md-8 d-flex delete-btn dFlex">
                                        <button className="btn btn-outline-warning">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
    

    let wishlistHeading = (
        <div className="row" style={{height: "50px"}}>
            <div className="col-12 dFlex justify-content-start">
                <h4 className="fpoppins-1-2 text-white mt-2">WishList</h4>
            </div>
        </div>
    )

    return (
        <div className="container-fluid" style={{background: "#2b2b2b", minHeight: "91.5vh", height: "auto", paddingBottom: "10px"}}>
            {localStorage.getItem("wishlist_data") ? wishlistHeading : null}
            <div>{bookmarkedData}</div>
        </div>
    );
}

export default WishList;