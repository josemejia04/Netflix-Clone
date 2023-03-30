import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

//props recieved from Home component
const Row = ({ title, fetchURL }) => {
  //set movie state to empty array using useState hook
  const [movies, setMovies] = useState([]);

  //axios api call using useEffect hook to render page on load
  useEffect(() => {
    //You use axios.get(url) with a URL from an API endpoint to get a promise which returns a response object
    axios.get(fetchURL).then((response) => {
      //inside the response object, there is data that is then assigned the state in movies array
      setMovies(response.data.results);
    });
    //[fetchURL] dependency to rerender the page when the url changes
  }, [fetchURL]);

  //console log reponse data array
  //console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {/* .map function to create a new array populated with the results from movies api call and a key to identify which items have changed in the array */}
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
