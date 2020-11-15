import React from 'react';

function Search({handleInput ,search}) {
    return (
        <section className="searchbox-wrap">
            <input type="text" placeholder="Enter Movie Name"  onChange={handleInput} 
            onKeyPress={search}
            className="searchbox"/>

        </section>
    )
}

export default Search;
