import {useState, useEffect} from 'react';
import tracks from './tracklist'
function SearchResults ({input}){
const[showResult, setShowResult] = useState(false);
useEffect(()=>{
    setShowResult(false)
}, [input])


const filteredTracks = tracks.filter((track)=>
    track.title.toLowerCase().includes(input.toLowerCase())
)
         
    
    
    return(
        <>
        <button type='button' onClick={()=>setShowResult(true)} >Search</button>

        <h1>RESULTS</h1>
        {showResult && input && filteredTracks.length > 0 && (
        <ul>
            {filteredTracks.map((track)=>
            <li key={track.id} ><strong>{track.title}</strong> by <em>{track.artist}</em> from {track.album} <button>add</button></li>
  )}
        </ul>)}
        {showResult && input && filteredTracks.length === 0 && <p>No results found.</p>}
        </>
    );
    

}

export default SearchResults;