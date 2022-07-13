import React from 'react';
import { format } from 'date-fns';

export default function NewsItem({ title, description, url, urlToImage, source, date, author }) {

    return (
        <div className="newsitem" >
            <div className="card">
                <img src={urlToImage} alt="NewsImage" className='imagediv' />
                <div className='timediv'>
                    <p>Published At - {format(new Date(date), 'h:mm a - MMM d, y')}</p>
                    {author && <p>Written By - {author}</p>}
                </div>
                <h3>
                    <a href={url}>{title}</a>
                </h3>
                <p>{description}</p>
                {source.name && <p>Source - {source.name}</p>}
            </div>
        </div>
    )
}