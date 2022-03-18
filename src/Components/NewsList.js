import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import "../Styles/newslist-style.css";
import axios from 'axios';
import NEWS_API_KEY from "../config.js";

export default function NewsList() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            // const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}`)

            // setArticles(res.data.articles);
            // console.log(res);
        }
        getArticles();
    }, []);

    return (
        <div className="newslist">
            {articles.map(({ title, description, url, urlToImage }) => (
                <NewsItem title={title}
                description={description}
                url={url} 
                urlToImage={urlToImage} />
            ))}
        </div>
    )
}