import Navbar from './Components/Navbar';
import Search from './Components/Search';
import NewsList from './Components/NewsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <NewsList />
    </div>
  );
}

export default App;
