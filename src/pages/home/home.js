 import React, { useEffect , useState } from "react"
 import "./home.css"

 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel' ;

import MovieList from "../../components/movieList/movieList";

/*We add a package of react responsive carousel
  name : react-responsive-carousel

  we then import css for it...specified at same site (npm site: in that after searching react-responsive-carousel)
  and then also import {Carousel}
 */


   /*What is empty <> in React?
   
The React framework offers a shorthand syntax for fragment components that appears as an empty tag: <></> . 
While it is supported in JSX syntax, it is not part of the HTML standard */ 

 const Home = () => {

    const[popularMovies, setPopularMovies] = useState([]) //data is in form of array thats y we create an empty array
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))

    },[])

    return (
        <>
        <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >

            {
                popularMovies.map(movie =>(
                 <div className="main">
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movie_image"/>
                    </div>
                    <div className="posterImage_overlay">
                        <div className="posterImage_title">{movie ? movie.original_title : ""}</div>
                        <div className="posterImage_runtime">{movie ? movie.release_date : ""}
                         <span className="posterImage_rating"> {movie ? movie.vote_average : ""}
                         <span className="star">⭐</span>
                         </span>
                        </div>
                        <div className="posterImage_description">{movie ? movie.overview : ""}</div>
                    </div>
                   
                 </div>
                ))
               
            }
        </Carousel>
        <MovieList />
        </div>
        </>
    )
 }

 export default Home