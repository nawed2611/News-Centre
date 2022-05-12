import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Search from './Pages/Search';
import NewsItem from './Components/NewsItem';
import "./Styles/search-style.css";

const alanKey ='cae7ec1d717fcfb00bcdc4340c8b2d532e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

  const [value, setValue] = useState('');
  const [articles, setArticles] = useState([]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  }

  useEffect(() =>{
    alanBtn({ 
        key: alanKey,
        onCommand: ({ command, articles}) => {
          if(command === 'searchHeadlines'){
            setArticles(articles);
          }
          console.log(articles);
        }
    })
  }, []);


  return (
    <Router>
      <div className="App">
        
        <Navbar />

        <div className="searchbar">
          <form className="searchbar-div" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search For News Here..." value={value} onChange={handleChange} />
            <Link to="/search"><button type="submit">Search</button></Link>
          </form>
        </div>

        {articles.map(({ title, description, url, urlToImage }) => (
                <NewsItem title={title}
                description={description}
                url={url} 
                urlToImage={urlToImage} />
            ))} 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search value={value} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
