
import styles from './searchResults.module.css'

function PlayList ({ playList, playListName, setPlayListName, onRemove, onSave }){



    return (
        <>
        <div className={styles.playlist}>
        <input type='text' placeholder='Enter name of playlist' value={playListName} onChange={(e)=>{setPlayListName(e.target.value)}} />
        
        <ul>
        {playList.map(track =>
          <li key={track.id}>
            {track.title} by {track.artist} from {track.album} <button onClick={() => onRemove(track.id)} >-</button>
          </li>
        )}
      </ul>
        <button onClick={()=>onSave()}>Save to Spotify</button>
        </div>   
        </>
    );
}

export default PlayList;
