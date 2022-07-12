import React, { useState, useEffect } from 'react';
import NewsItem from '../Components/NewsItem';
import axios from 'axios';

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export default function Search({ value }) {

    const [sarticles, setsArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => {
		
            const getsArticles = async () => {
                setLoading(true)
                const res = await axios.get(`https:newsapi.org/v2/everything?q=${value}&apiKey=${NEWS_API_KEY}`)
    
                setsArticles(res.data.articles);
                console.log(sarticles);
                setLoading(false)
            }
            getsArticles();
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [ value]);


    return (
        <div className="search">
            <h1 className="search-heading">Search Results for {value}</h1>

            <div className="search-results">
                {
                    loading && <div className='loader'><h1>Loading...</h1></div>
                }
                {sarticles && sarticles.map(({ title, description, url, urlToImage }) => (
                    <NewsItem title={title}
                        description={description}
                        url={url}
                        urlToImage={urlToImage} key={url} />
                ))}
            </div>
        </div>
    )
}