import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Search from './Pages/Search';
import { Input, Button } from 'antd';
import "./Styles/search-style.css";
import './App.css';

function App() {

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  }


  return (
    <Router>
      <div className="App">
        
        <Navbar />

        <div className="searchbar">
          <form className="searchbar-div" onSubmit={handleSubmit}>
            <Input type="text" placeholder="Search For News Here..." value={value} onChange={handleChange} />
            <Link to="/search"><Button type="submit">Search</Button></Link>
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
