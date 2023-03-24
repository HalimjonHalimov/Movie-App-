import React, { useContext, useEffect } from 'react';
import { Content } from '../context';

const Index = () => {
    const {state, dispatch} = useContext(Content);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then(json => {
            const newData = json.map(item => ({
              name: item.title, 
              id: item.id,
              viewer: item.id*10,
              favourite: false,
              like: false
            }));
            dispatch({type: 'GET_DATA', payload: newData})
          });
      }, []);
}

export default Index;
