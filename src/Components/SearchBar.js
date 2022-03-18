import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Input, Button} from 'antd';
import Search from '../Pages/Search';
import "../Styles/search-style.css";

export default function SearchBar(){

    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
    } 
    
    return(
        <div>
            <form className="search-div" onSubmit={handleSubmit}>
                <Input style ={{width:"30%"}} type="text" placeholder="Search For News Here..." value={value} onChange={handleChange} />  
                <Link to="/search"><Button type="submit">Submit</Button></Link>
            </form>
            
            <Search value={value} />
        </div>
    );
}