import React from "react";
import movieData from "../Movie data/MovieData.json"
import './card.css' ;

const Card = ({ image, title, year }) => {
  console.log("movieData", movieData);
  return (
    <>
      <div className="movie-card">
        <div className="card-body" >
        <div className="img-div " >
          <img src={image} alt="movie-img" className="h-56 w-56 rounded-t-lg" />
          </div>
          <div className="flex flex-wrap">
            <h1>{title}</h1>
          </div>
          <h1>{year}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
