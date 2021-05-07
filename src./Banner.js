import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests'
import './Banner.css' 

function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(() => {
       async function fetchData()
       {
           const request =await axios.get(requests.fetchNetflixOrignals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]

            ); // random calling movies array [1,2,....]
             
       }
       fetchData();
    }, []);
    console.log(movie);
      
    function truncate(str,n)
    {
        return str?.length>n ? str.substr(0,n-1) + "..." : str;
    }
    /* For three .. in reading section */
        
  return (
    <header className="banner"
      style={{
          backgroundSize:"cover",
          backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",

      }}
      > {/* For Background Image */}
      <div className="banner_contents">
        {/* Title */}
        <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.orignal_name}  {/* If movie title is not able then use name and ? handle any erors */}
        </h1>
        {/* 2 Div for Buttons */}
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
            {truncate(movie?.overview,150)}
        </h1>
         {/* Discription */}
      </div>
      <div className="banner-fadeBottom"/>
    </header>
  )
}

export default Banner
