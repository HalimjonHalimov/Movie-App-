import React, { useContext, useState } from 'react';
import { Content } from '../../context';
import './movie-app-search.css';

const MovieAppSearch = () => {
    const [tern, setTern] = useState('');
    const {state, dispatch} = useContext(Content);
    
    const onTernHandle = e => {
        e.preventDefault()
        const tern = e.target.value;
        setTern(tern)
        dispatch({type: 'ON_TERN', payload: tern})
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
