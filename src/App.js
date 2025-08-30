import React, {useState} from 'react';
import './App.css';
import SearchBar from './searchbar';
import SearchResults from './searchResults';
import Header from './header'

function App() {
  const[input, setInput] = useState('');
  return (
    <div>
       <Header />
       <SearchBar input={input} setInput={setInput} />
       <SearchResults input={input} setInput={setInput} />
    </div>
  );
}

export default App;
