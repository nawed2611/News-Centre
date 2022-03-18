import React from 'react';
import NewsList from '../Components/NewsList';

export default function Home(){

    return(
        <div className="Home">
            <h1>Top Headlines in India</h1>
            <NewsList />
        </div>
    );
}