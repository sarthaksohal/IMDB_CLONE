import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'

function NavBar() {
  return (

    <div className="flex items-center space-x-10 pl-3 py-3 border">
    <img  className="w-[50px]" id="Movie_Logo" src="movie_logo.jpg" alt="" />
    <Link className="text-blue-500 text-3xl" to="/" ><strong>Movies</strong></Link>
    <Link className="text-blue-500 text-3xl"  to="/watchlist"><strong>WatchList</strong></Link>  
     </div>
)
}

export default NavBar