
function SearchResults ({input}){
    
const tracks = [
    {
    id: 13,
    title: 'love',
    artist: 'Davido',
    album: 'tunez'
},
    {
     id: 14,
    title: 'hate',
    artist: 'Wizkid',
    album: 'melody'   
},
    {
    id: 15,
    title: 'sick',
    artist: 'Jason',
    album: 'treasure Island'
},
    {
    id: 16,
    title: 'love',
    artist: 'Falz',
    album: 'trim'    
    }]


const filteredTracks = tracks.filter((track)=>
    track.title.toLowerCase().includes(input.toLowerCase())
)
    if(!input){
        return <h1>RESULTS</h1>
    }

    if(filteredTracks.length === 0){
        return <h1>RESULTS</h1>
    }

    return(
        <>
        <h1>RESULTS</h1>
        <ul>
            {filteredTracks.map((track)=>
            <li key={track.id} ><strong>{track.title}</strong> by <em>{track.artist}</em> from {track.album} <button>add</button></li>
  )}
        </ul>
        </>
    );
  


}

export default SearchResults;