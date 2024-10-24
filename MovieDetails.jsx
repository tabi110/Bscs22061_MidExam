import React from 'react';
import ReactDOM from 'react-dom/client';


function Title() 
{
  return <h2>Mission Impossible: Ghost Reckoning</h2>;
}
function Rating() 
{
  return <h2>IMDB 4.5/5<br></br>
    RottenTomatoes 4.3/5
  </h2>;
}

function Release_Date() 
{
  return <h2>20th February, 2024</h2>;
}


function MovieItem() {
  return (
    <>
	    <h1>Movie Details</h1>
	     <Title />
        <Release_Date />
        <Rating />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MovieItem />);