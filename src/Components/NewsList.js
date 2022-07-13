import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

export default function NewsList() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true)
            const res = await axios.get(`https:newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)

            setArticles(res.data.articles);
            console.log(res.data);
            setLoading(false)
        }
        getArticles();
    }, []);

    return (
        <div className="newslist">
            {
                loading && <div className='loader'><h1>Loading...</h1></div>
            }
            {articles && articles.map(({ title, description, url, urlToImage, source, publishedAt, author }) => (
                <NewsItem title={title}
                    description={description}
                    url={url}
                    urlToImage={urlToImage}
                    key={url} 
                    source={source} 
                    date={publishedAt}
                    author={author} />
            ))}
        </div>
    )
}