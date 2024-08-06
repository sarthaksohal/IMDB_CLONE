import React, { useEffect, useState } from 'react'
import MovieComponent from './MovieComponent'
import axios from 'axios'
import Pagination from './Pagination'

  

  

function Movies({SetTheWatchList,removeFromWatchList,watchlisttt}) {
  const [movie,setmovie]=useState([])
  const [page,setpage]=useState(1)
  function handleprev(){
    if(page==1)
      setpage(1)
    else
    setpage(page-1)
  }
  function handlenext(){
    setpage(page+1)
  }
  useEffect(()=>{

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2e327b2951daedb2c29b21a47b88d499&language=en-US&page=${page}`)
    .then(function(res){
      setmovie(res.data.results)})
    
},[page])
  return (
<div>
    <div className='text-bold m-5 text-center'>
      <p><strong>Trending Movies</strong></p>
    </div>
    
    <div className='flex flex-row flex-wrap gap-8 justify-around '>

      {movie.map((movieSet)=>{
    return <MovieComponent key={movieSet.id} removeFromWatchList={removeFromWatchList} SetTheWatchList={SetTheWatchList} movieSet={movieSet} movie_name={movieSet.title} imdb={movieSet.vote_average} poster_path={movieSet.poster_path} watchlisttt={watchlisttt} />
    
      })
      }
    </div>
    <Pagination page={page} handlenext={handlenext} handleprev={handleprev}/>
    </div>  
    )
}

export default Movies