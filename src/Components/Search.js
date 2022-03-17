import React from 'react';
import {Input, Button} from 'antd';
import "../Styles/search-style.css";

export default function Search(){

    return(
        <div className="search-div">
            <Input style ={{width:"30%"}} type="text" placeholder="Search For News Here..." />  
            <Button>Submit</Button>          
        </div>

    )
}