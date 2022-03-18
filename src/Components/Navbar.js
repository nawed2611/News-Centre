import React from 'react';
import "../Styles/navbar-style.css";

export default function Navbar(){

    return(
        <div className="navbar">
                <h2>News Centre</h2>
                <ul className="navlinks">
                    <a style={{color: "black"}} href="https://github.com/nawed2611/News-App" target="_blank"><li>GitHub Repo</li></a>
                </ul>
        </div>

    )
}