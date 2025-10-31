import React, { useEffect, useState } from 'react';
import Input from './Input';
import DisplayMovie from './DisplayMovie';

const App = () => {
  const [movies, setmovies] = useState([])
  const [search, setsearch] = useState('')
   function getmoviesdata() {
    var api = '';
    if (search != '') {
      api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
    } else {
      api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    }
    const apidata = await fetch(api)
    const apidatajson = await apidata.json()
   
  }

  function inputvalueget(inputvalue) {
    console.log(inputvalue);
    setsearch(inputvalue)
  }

  useEffect(
    () => {
      getmoviesdata()
    },
    [search]
  )

  return (
    <div>
      <Input inputvalueget={inputvalueget} />
      <DisplayMovie  />
    </div>
  );
}

export default App;
