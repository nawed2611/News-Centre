import React from 'react';
import {Card} from 'antd';
import "../Styles/newsitem-style.css";

export default function NewsItem( {title, description, url, urlToImage}) {
    return (
        <div className="newsitem">
            <Card className="card" 
            cover= {<img src={urlToImage} alt="News Image" />} >
            <h3>
                <a href = {url}>{title}</a>
            </h3>
            <p>{description}</p>
            </Card>
        </div>
    )
}