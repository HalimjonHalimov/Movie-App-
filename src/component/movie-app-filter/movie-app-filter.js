import React, { useContext } from 'react';
import { Content } from '../../context';
import './movie-app-filter.css';

const MovieAppFilter = ({onFilter}) => {
    const {state, dispatch} = useContext(Content);
    
    return (
        <div>
            {button.map(item => (
                <button 
                    key={item.id}
                    className={`movie-app-button `}
                    onClick={() =>  dispatch({type: 'ON_FILTER', payload: item.name})}
                    >
                        {item.label}
                </button>
            ))}
        </div>
    );
}

export default MovieAppFilter;

const button = [
    {name: 'all', label: 'All Movie', id: 1},
    {name: 'popular', label: 'Popular Movie', id: 2},
    {name: 'most', label: 'Most Vieved Movie', id: 3}
]
