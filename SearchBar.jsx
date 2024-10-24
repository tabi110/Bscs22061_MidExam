import React from 'react';
import ReactDOM from 'react-dom/client';


function Search() 
{
  return <h2>Searching...!</h2>;
}
function DisplayDetails() 
{
  return <h2>Movie Not Found...!
  </h2>;
}

function SearchBar() {
  return (
    <>
	    <h1>
            Search Here: </h1>
	      <Search />
        <DisplayDetails />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchBar />);