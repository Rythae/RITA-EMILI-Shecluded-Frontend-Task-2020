import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component{

    render () {
        return (
            <div className="container-home">
                <div className="center-home">
                <h1>Welcome to Homepage!</h1>
                <p>We have adorable cats for sale</p>
                <button className="view-cats">
                <Link to="/cats" className="nav-link">
                    View cats
                </Link>
                </button><br/>
                <button className="view-cats">
                <Link to="/characters" className="nav-link">
                    View characters
                </Link>
                </button>
                </div>
            </div>
        );
 }
}

export default Home;
