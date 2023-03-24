import React, { useState } from 'react';
import './movie-app-search.css';

const MovieAppSearch = ({onTern}) => {
    const [tern, setTern] = useState('');
    
    const onTernHandle = e => {
        e.preventDefault()
        const tern = e.target.value;
        setTern(e.target.value)
        onTern(tern)
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='Search Movie' 
                className='movie-app-search' 
                onChange={onTernHandle}
                value={tern}
            />
        </div>
    );
}

export default MovieAppSearch;
