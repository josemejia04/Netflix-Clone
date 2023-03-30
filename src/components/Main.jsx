import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {
    //set movie state to empty array
const [movies, setMovies] = useState([]);

// movie variable to hold the value a random movie from the array that is being returned in the api call
const movie = movies[Math.floor(Math.random() * movies.length)];

//axios api call using useEffect hook to render page and dependency[] to only load once
useEffect(() => {
    //You use axios.get(url) with a URL from an API endpoint to get a promise which returns a response object
    axios.get(requests.requestPopular).then((response) =>{
        //inside the response object, there is data that is then assigned the value of movies
        setMovies(response.data.results)
    })
    //[] is a dependency to only load once
}, []);

//console.log(movies);
//console.log(movie);

  return (
    <div>Main</div>
  )
}

export default Main;