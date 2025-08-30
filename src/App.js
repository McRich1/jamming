import React, {useState} from 'react';
import './App.css';
import SearchBar from './searchbar';
import SearchResults from './searchResults';
import Header from './header'
import PlayList from './playlist';
import styles from './searchResults.module.css' 

function App() {
  const[input, setInput] = useState('');
  return (
<>
 <div className={styles.overallcontainer}>
      <Header />
      <SearchBar input={input} setInput={setInput} />
    <div className={styles.sidebyside}>
      <div>
        <SearchResults input={input} setInput={setInput} />
      </div>
      <div>
        <PlayList />
      </div>
    </div>
 </div>
</>
  );
}

export default App;
