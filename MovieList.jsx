import React from 'react';
import ReactDOM from 'react-dom/client';


function Movie1() 
{
  return <h2>Mission Impossible: Ghost Reckoning</h2>;
}
function Movie2() 
{
  return <h2>SpiderMan No Way Home</h2>;
}

function Movie3() 
{
  return <h2>Avengers Endgame</h2>;
}

function Movie4() 
{
  return <h2>Inside Out</h2>;
}

function Movie5() 
{
  return <h2>The Garfield Movie</h2>;
}


function MovieList() {
  return (
    <>
	    <h1>
            Movies List</h1>
	    <Movie1 />
        <Movie2 />
        <Movie3 />
        <Movie4 />
        <Movie5 />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MovieList />);