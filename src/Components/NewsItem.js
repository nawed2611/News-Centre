import React, {useState} from 'react';
import '../Styles/newsitem-style.css'

export default function NewsItem({ title, description, url, urlToImage }) {

    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
        console.log(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
    }

    return (
        <div className="newsitem">
            <div className="card">
                <img src={urlToImage} alt="News" />
                <h3>
                    <a href={url}>{title}</a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}