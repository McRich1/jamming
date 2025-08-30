

function SearchBar (prop){
      

    function handleInput (e){
        prop.setInput(e.target.value)
    }
    function handleSubmit (e){
        e.preventDefault();
        //alert(`you searched ${prop.input}`);
        //prop.setInput('')
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' id='searchBar' placeholder='Enter song title/artist' value={prop.input} onChange={handleInput} />
                
            </form>
        </div>
        </>
    );
}

export default SearchBar;