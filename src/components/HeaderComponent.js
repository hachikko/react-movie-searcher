import React from 'react';
import './Components.css';
import homeimg from './homeImage.jpeg';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {transform: false};
    }

    search(e) {
        if(e.keyCode === 13) {
            this.setState({
                transform: true
            });
        }
        
    }

    render() {
        return (
            <nav className={!this.state.transform ? "navbar navbar-dark bg-dark fixed-top h-100" : "navbar navbar-dark bg-dark fixed-top"} style={!this.state.transform ? {background: `url(${homeimg})`} : {transition: "height 10s ease !important"}} id="navbar">
                <div className={!this.state.transform ? "container-fluid fixed-top mt-2" : "d-none"}>
                   <a href="#" className="navbar-brand mr-auto">Movie Searcher</a>
                   <div className="ml-auto d-flex align-items-center justify-content-center">
                           <button className="btn">
                                <span className="far fa-bookmark mr-2 text-white"></span>
                                <span className="d-none d-lg-inline text-white">Wish List</span>
                           </button>
                    </div>
                </div>
                <a href="#" className={!this.state.transform ? "navbar-brand mr-auto d-none" : "navbar-brand mr-auto"}>Movie Searcher</a>
                <div className="container mr-0 pr-0">
                     <div className="row-fluid d-flex justify-content-center w-100">
                        <div className="col-10">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text" style={!this.state.transform ? {background: "white", border: "none"} : null}>
                                        <span className="fa fa-search"></span>
                                    </div>
                                </div>
                                <input type="text" className={!this.state.transform ? "form-control pl-0 shadow-none" : "form-control"} onKeyDown={(e) => this.search(e)} style={!this.state.transform ? {height: "60px", border: "none"} : null} placeholder="Search A Movie"/>
                            </div>
                        </div>
                        <div className={!this.state.transform ? "col d-none d-sm-flex align-items-center justify-content-center" : "col-2 d-flex align-items-center justify-content-center"}>
                           <button className={!this.state.transform ? "btn d-none" : "btn"} >
                                <span className="far fa-bookmark mr-2 text-white"></span>
                                <span className="d-none d-lg-inline text-white">Wish List</span>
                           </button>
                        </div>
                     </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
