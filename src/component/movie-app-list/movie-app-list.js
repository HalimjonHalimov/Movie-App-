import React, { useContext } from 'react';
import { Content } from '../../context';
import {onfilterHandle, onTernHandle} from '../../utility'
import MovieAppListItem from '../movie-app-list-item/movie-app-list-item';
import './movie-app-list';

const MovieAppList = () => {
    const {state, dispatch} = useContext(Content)
    const data = onTernHandle(onfilterHandle(state.data, state.filter), state.tern)
    
    return (
        <div>
        {data.map(item => (
            <MovieAppListItem key={item.id} {...item}/>
        ))}
        </div>
    );
}

export default MovieAppList;
