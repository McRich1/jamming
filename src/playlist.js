import React, {useState} from 'react';
import styles from './searchResults.module.css'
function PlayList (track){
const[playList, setPlayList] = useState([]);

function handleAddTrack (){
    setPlayList((prev)=>
        [...prev, track]
    )
}
    return (
        <>
        <div className={styles.playlist}>
        <input type='text' placeholder='Enter name of playlist' />
        {playList && <p></p>}
        </div>   
        </>
    );
}

export default PlayList