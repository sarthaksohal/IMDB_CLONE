import React from "react";

function MovieComponent({
  movie_name,
  imdb,
  poster_path,
  SetTheWatchList,
  movieSet,
  watchlisttt,
  removeFromWatchList,
}) {
  function doesContain(movieSet) {
    for (let i = 0; i < watchlisttt.length; i++) {
      if (watchlisttt[i].id == movieSet.id) return true;
    }
    return false;
  }
  return (
    <>
      <div
        className="h-[40vh]  w-[200px] flex items-end text-center justify-between bg-fit bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex-col "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieSet) ? (
          <div
            onClick={() => removeFromWatchList(movieSet)}
            className="h-[4vh] w-[4vh] flex justify-center items-center rounded-lg m-4 bg-gray-5 00/60"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => SetTheWatchList(movieSet)}
            className="h-[4vh] w-[4vh] flex justify-center items-center rounded-lg m-4 bg-gray-500/60"
          >
            &#128525;
          </div>
        )}

        <div className="text-white text-xl  w-full  p-2 text-center    bg-gray-900/60 rounded-xl">
          {movie_name}
        </div>
      </div>
    </>
  );
}

export default MovieComponent;
