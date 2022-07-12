import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

export default function Navbar() {

    return (
        <div className="navbar">
            <Link to="/"><h2>News Centre</h2></Link>
            <ul className="navlinks">
                <a href="https://github.com/nawed2611/News-Centre" target="_blank" rel="noreferrer"><li><AiFillGithub size="40px" /></li></a>
            </ul>
        </div>

    )
}