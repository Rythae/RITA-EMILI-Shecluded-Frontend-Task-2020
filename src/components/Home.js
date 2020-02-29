import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/main.scss';

class Home extends Component{

    render () {
        return (
            <div className="container-home">
                <div className="center-home">
                <h1 className="welcome">Welcome to Homepage!</h1>
                <p className="for-sale">Do take a tour and have fun!</p>
                <div className="center-link">
                    <Link to="/cats" className="nav-link">
                        View cats
                    </Link>
                    <Link to="/characters" className="nav-link">
                        LOTR
                    </Link>
                </div>
                </div>
            </div>
        );
 }
}

export default Home;
