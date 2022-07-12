import React from 'react';

export default function NewsItem({ title, description, url, urlToImage, i }) {

    return (
        <div className="newsitem" key={i}>
            <div className="card">
                <img src={urlToImage} alt="NewsImage" />
                <h3>
                    <a href={url}>{title}</a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}