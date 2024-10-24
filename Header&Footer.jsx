import React from 'react';
import ReactDOM from 'react-dom/client';

function Header() 
{
  return <h2>Welcome to Movie Explorer App</h2>;
}
function Footer() 
{
  return <h2>Thankyou for visiting us!</h2>;
}

function HeaderFooter() {
  return (
    <>
	    <h1>
            Search Here: </h1>
	      <Header />
        <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchBar />);
root.render(HeaderFooter);