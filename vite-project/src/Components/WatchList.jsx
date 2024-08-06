import { useEffect, useState } from "react";
import React from "react";

import genreids from "../Utility/genre"

import Search from "./Search";
function WatchList({ watchlisttt, RemoveTheMovie,setwatchList}) {
  const [search, setText] = useState("");
  const [currGenre,setCurrGenre]=useState("All Genre")
  function handletheCurrGenre(genre){
    setCurrGenre(genre)
  }

  function handling(e) {
    setText(e.target.value);
  }
  function sortincreasing(){
    let sorted=watchlisttt.sort((movieA,movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })
    setwatchList([...sorted])
  }
  function sortdecreasing(){
    let sorted=watchlisttt.sort((movieA,movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
  
    setwatchList([...sorted])
  }
  const [Genre,setGenre]=useState(['All Genres'])
  useEffect(()=>{
    let k=watchlisttt.map((w)=>{
     return genreids[w.genre_ids[0]]
  })
  k=new Set(k)
  setGenre(['All Genre',...k])

  console.log(k)
},[watchlisttt])
  return (
    <>
    <div className="flex justify-center flex-row ">
       
    {Genre.map((g)=>{

 return  <div onClick={()=>handletheCurrGenre(g)} className={currGenre==g?"flex justify-center items-center h-[3rem] w-[9rem] mx-4 my-8 bg-blue-400 rounded-xl font-bold":"flex justify-center items-center h-[3rem] w-[9rem] mx-4 my-8 bg-gray-400 rounded-xl font-bold"}>
          {g}
    
        </div>})}


        
      </div>
      <div>
        <Search Text={search} handling={handling} watchlisttt={watchlisttt} />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-4">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
              <div className="flex justify-center">
                <div onClick={sortincreasing}className="mx-2"><i class="fa-solid fa-arrow-up"></i></div>
              <div>Ratings</div>
              <div onClick={sortdecreasing} className="mx-2"><i class="fa-solid fa-arrow-down"></i></div>
              </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

  
            {watchlisttt.filter((movieObj) => {
              return movieObj.title
                .toLowerCase()
                .includes(search.toLocaleLowerCase());
            }).filter((mov)=>{
              return  ((currGenre!="All Genre")?genreids[mov.genre_ids[0]]==currGenre:mov )
            })
            .map((w, index) => (
              <tbody>
                <tr className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem] flex justify-center"
                      src={`https://image.tmdb.org/t/p/original/${w.poster_path}`}
                    />
                    <div className="mx-4">{w.title}</div>{" "}
                  </td>
                  <td>{w.vote_average}</td>
                  <td>{w.popularity}</td>
                  <td>{genreids[w.genre_ids[0]]}</td>
                  <td
                    onClick={() => RemoveTheMovie(w)}
                    className="text-red-800 hover:cursor-pointer "
                  >
                    Delete
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
}

export default WatchList;
