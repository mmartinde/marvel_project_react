/* export default function Home (){
    return(
        <>
            <h2>Wellcome!</h2>
        </>
    )
} */

import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <div className="well well-lg">
        <h1>Welcome to the Marvel Comics Collection!</h1>
        <p>Explore the exciting world of Marvel Comics and discover your new favorite superhero!</p>
        <img src="https://i.pinimg.com/736x/aa/76/68/aa7668c2956dd46a8038019706c34faa.jpg" alt="Marvel Comics Logo" className="img-fluid mt-3" />
      </div>
    </div>
  );
};

export default Home;