import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  //state for like icons set intially to false
  const [like, setLike] = useState(false);
  //state for saved shows set intially to false
  const [saved, setSaved] = useState(false);
  // user authentication state
  const { user } = UserAuth();
  // referencing user email in firestore database under users document
  const movieID = doc(db, "users", `${user?.email}`);

  //function to save show to firestore database
  const saveShow = async () => {
    //check to see if user is logged in
    if (user?.email) {
      // set like state
      setLike(!like);
      // set saved state
      setSaved(true);
      // wait for resolved promise to proceed with update
      await updateDoc(movieID, {
        // update array elements in firestore database document
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
      // alert user to log in to save shows
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      {/* backdrop image object using base url with sizing and template literal with optional chaining(?.) to read nested value in object */}
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>

        {/* ternary operator for like state */}
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
