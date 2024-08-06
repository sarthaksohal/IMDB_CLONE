import React from "react";
import { Link } from "react-router-dom";

function Banner({poster_path,movie_name}) {
  return (
    <div
      className="h-[75vh] w-full flex items-end  bg-center bg-cover  "
      style={{
       backgroundImage: `url(
        https://image.tmdb.org/t/p/original/${poster_path})`,
      }}>

   <div className="text-white text-2xl w-full text-center bg-gray-900/60 p-3 ">
       
       <strong>{movie_name}</strong>
      </div>
    </div>
  );
}

export default Banner;
