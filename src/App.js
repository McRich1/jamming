import React, {useState} from 'react';
import './App.css';
import SearchBar from './searchbar';
import SearchResults from './searchResults';
import Header from './header'
import PlayList from './playlist';
import styles from './searchResults.module.css' 

function App() {
  const[input, setInput] = useState('');
  const[playList, setPlayList] = useState([]);
  const[playListName, setPlayListName] = useState('My playlist')

   function handleAddTrack (track){
      setPlayList((prev)=>{
        if(prev.some(t => t.id === track.id)){
          return prev;
        }
        return [...prev, track]
      })
      
    }
    function handleRemoveTrack (trackId){
      setPlayList((prev)=>
        prev.filter(track => track.id !== trackId )
      )
    
  }

  function handleSavePlaylist (){
        alert('Playlist Saved')
        setPlayList([])
  }
  return (
<>
 <div className={styles.overallcontainer}>
      <Header />
      <SearchBar input={input} setInput={setInput} />
    <div className={styles.sidebyside}>
      <div>
        <SearchResults input={input} setInput={setInput} onAdd={handleAddTrack} />
      </div>
      <div>
        <PlayList playList={playList} onRemove={handleRemoveTrack} onSave={handleSavePlaylist} setPlayList={setPlayList} playListName={playListName} setPlayListName={setPlayListName} />
      </div>
    </div>
 </div>
</>
  );
}

export default App;
