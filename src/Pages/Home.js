import React from 'react';
import NewsList from '../Components/NewsList';

export default function Home(){

    return(
        <div>
            <h1 className="search-heading">Top Headlines in India</h1>
            <NewsList />
        </div>
    );
}