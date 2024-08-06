import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import WatchList from "./Components/WatchList";
import Movies from "./Components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import axios from "axios";
import genreids from "./Utility/genre";

function App() {
  const [mov, setmov] = useState([]);
  let movv = "";
  let popp = "";
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2e327b2951daedb2c29b21a47b88d499&language=en-US&page=1`
      )
      .then(function (res) {
        setmov(res.data.results[0]);
      });
  }, []);

  const [watchlisttt, setwatchList] = useState([]);
  function SetTheWatchList(moviee) {
    let newwatchlist = [...watchlisttt, moviee];
    localStorage.setItem("moviesApp", JSON.stringify(newwatchlist));
    setwatchList(newwatchlist);
  }
  
  useEffect(()=>{
    let localStorageMovies=localStorage.getItem('moviesApp')
    if(!localStorageMovies)
      return;
    setwatchList(JSON.parse(localStorageMovies))
  },[])
  function removeFromWatchList(moviee) {
    let k = watchlisttt.filter((w) => {
      return w.id != moviee.id;
    })
    
    localStorage.setItem('moviesApp',JSON.stringify
      (k))
    setwatchList(k);
  }
  function RemoveTheMovie(w) {
    let k = watchlisttt.filter((ww) => {
      return ww.id != w.id;

    });
    localStorage.setItem('moviesApp',JSON.stringify
      (k))
    setwatchList(k);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner
                  movie_name={mov.original_title}
                  poster_path={mov.poster_path}
                />
                <Movies
                  SetTheWatchList={SetTheWatchList}
                  removeFromWatchList={removeFromWatchList}
                  watchlisttt={watchlisttt}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlisttt={watchlisttt}
                RemoveTheMovie={RemoveTheMovie}
                setwatchList={setwatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
