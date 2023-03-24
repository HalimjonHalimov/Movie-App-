import React, { useContext } from 'react';
import { Content } from '../../context';
import './movie-app-info.css';

const MovieAppInfo = () => {
    const {state, dispatch} = useContext(Content);
    const mostViewed = state.data.filter(item => item.favourite !== false)
    return (
        <div>
            <h1> All Movie Count: {state.data.length} </h1>
            <p>Most vieved: {mostViewed.length}</p>
            <p>New added: {state.newData.length}</p>
        </div>
    );
}

export default MovieAppInfo;
