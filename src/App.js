import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Home from './Pages/Home';
import Search from './Pages/Search';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path="/" element ={<Home />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
