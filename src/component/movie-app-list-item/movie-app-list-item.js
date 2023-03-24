import React, { useContext } from 'react';
import { Content } from '../../context';
import './movie-app-list-item.css';

const MovieAppListItem = ({ id, name, viewer, favourite, like }) => {
    const {state, dispatch} = useContext(Content)

    const onDelete = () =>  {
        dispatch({type: 'ON_DELETE', payload: id})
    }

    const onToggle = (e) => {
        const payload = {
            id: id,
            prop: e.currentTarget.getAttribute('data-toggle')
        }
        dispatch({type: 'ON_TOGGLE_PROP', payload: payload})
    }
    


    return (
            <div className={`movie-app-list ${favourite && 'favourite'}`}>
                <div className="list-item-name" data-toggle="favourite" onClick={onToggle}>
                    {name}
                </div>
                <div className="list-item-viever">{viewer}</div>
                <div className="list-item-group">
                    <button className={`${like && 'like'}`} onClick={onToggle} data-toggle="like">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button className='trash' onClick={onDelete}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
    );
}

export default MovieAppListItem;
