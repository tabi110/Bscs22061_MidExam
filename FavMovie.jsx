import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function FavouriteMovie() {
  const [movie, setMovie] = useState("red");
  return(
    <>
    <h1>My selected movie is {movie}</h1>
    <button
    type = "button"
    onClick={( setMovie("Mission Impossible"))}
    >Mission Impossible</button>
    <button
    type = "button"
    onClick={( setMovie("SpiderMan No Way Home"))}
    >SpiderMan No Way Home</button>
    <button
    type = "button"
    onClick={( setMovie("Avengers Endgame"))}
    >Avengers Endgame</button>
    <button
    type = "button"
    onClick={( setMovie("Inside Out"))}
    >Inside Out</button>
    <button
    type = "button"
    onClick={( setMovie("The Garfield Movie"))}
    >The Garfield Movie</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavouriteMovie />);