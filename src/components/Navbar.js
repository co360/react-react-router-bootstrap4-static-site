import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="container">
                            <Link className="navbar-brand" to="/">React React-Router Bootstrap 4 Static</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav ml-auto">

                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/contact">Contact</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navbar;


