import React from 'react';
import {Link} from 'react-router-dom';
import "../Styles/navbar-style.css";

export default function Navbar(){

    return(
        <div className="navbar">
                <Link to="/"><h2>News Centre</h2></Link>
                <ul className="navlinks">
                    <a href="https://github.com/nawed2611/News-App" target="_blank"><li>GitHub Repo</li></a>
                </ul>
        </div>

    )
}