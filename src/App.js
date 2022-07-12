import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web';
import { AiOutlineSearch } from 'react-icons/ai';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Search from './Pages/Search';

const alanKey = process.env.REACT_APP_ALANAI_KEY;

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

  useEffect(() => {
    // Alan AI Button Function
    alanBtn({
      key: alanKey,
      onCommand: ({ command, searcharticles }) => {
        if (command === 'searchHeadlines') {
          setArticles(searcharticles);
        }
        console.log(articles);
      }
    })
  }, [articles]);


  return (
    <Router>
      <div className="App">

        <Navbar />

        <div className="searchbar">
          <form className="searchbar-div" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search For News Here..." value={value} onChange={handleChange} />
            <Link to="/search"><button type="submit">Search {' '}<AiOutlineSearch size="20px" style={{ marginLeft: "2px" }} /></button></Link>
          </form>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search value={value} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
