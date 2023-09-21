import React from "react";
import Card from "../Card/Card";
import MovieHeader from "../Movie Header/MovieHeader";
import movieData from "../Movie data/MovieData.json"

const Movie = () => {
  return (
    <>
    <MovieHeader />
       <div className="card flex flex-wrap justify-between gap-5">
         {movieData.map((movie, id) => {
           return (
             <Card
               key={id}
               image={movie.Poster}
               title={movie.Title}
               year={movie.Year}
             />
           );
         })}
       </div>
      
    </>
  );
};

export default Movie;
