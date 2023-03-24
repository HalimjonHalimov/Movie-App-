import MovieAppAdd from './component/movie-app-add/movie-app-add';
import MovieAppFilter from './component/movie-app-filter/movie-app-filter';
import MovieAppInfo from './component/movie-app-info/movie-app-info';
import MovieAppList from './component/movie-app-list/movie-app-list';
import MovieAppSearch from './component/movie-app-search/movie-app-search';
import { useContext, useEffect } from 'react';

import { Content } from './context';

import './App.css';

function App() {

  const {state, dispatch} = useContext(Content)

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


  return (
    <div className='movie'>
      <div className='movie-app'><MovieAppInfo /></div>
      <div className="movie-app">
        <MovieAppSearch /> 
        <MovieAppFilter />
      </div>
      <div className="movie-app"> <MovieAppList /> </div>
      <div className="movie-app"><MovieAppAdd/>
      </div>
    </div>
  );
};

export default App;
