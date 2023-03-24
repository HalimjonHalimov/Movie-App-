import React, { useContext, useState } from 'react';
import { Content } from '../../context';
import './movie-app-add.css';

const MovieAppAdd = () => {
    const [input, setInput] = useState({ name: '', viewer: '' });
    const {state, dispatch} = useContext(Content);

    const changeHandleInput = (e) => {
        setInput(values => ({ ...values, [e.target.name]: e.target.value }));
    };
    
    const addFormHandle = (e) => {
        e.preventDefault();
        if(input.name === '' || input.viewer === ''){
            alert('something went wrong !');
        }else {
           dispatch({type: 'ON_ADDFORM', payload: input})
        }
        setInput({ name: '', viewer: '' });
    };
    return (
        <div className='movie-app-add'>
            <h2> Add new movie </h2>
            <form action="#" onSubmit={addFormHandle}>
                <input
                    type="text"
                    name="name"
                    placeholder='add your movie name'
                    onChange={changeHandleInput}
                    value={input.name}
                />
                <input 
                    type="text" 
                    name="viewer" 
                    placeholder='add your movie viewers' 
                    onChange={changeHandleInput} 
                    value={input.viewer}      
                />
                <button 
                    type='submit' className='add-movie'> add movie </button>
            </form>
        </div>
    );
}

export default MovieAppAdd;
