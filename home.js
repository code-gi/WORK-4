import React from 'react';
import "../App.css"

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Invix Media!</h1>
      <p>
We provide diverse information to our audience. <br>Featuring a broad spectrum of topics ranging from politics and current affairs to technology, entertainment, and beyond, these sites aim to inform and educate readers globally.</br> With updates in real-time and multimedia integration, they provide a comprehensive view of local and international events, fostering a deeper understanding and engagement with the world. 
      </p>
      {/* <img src="/images/home-image.jpg" alt="Home Image" /> */}
      <p>
        Fusce vehicula urna sit amet ante sollicitudin pellentesque. Nullam
        interdum quam non ex suscipit, quis lacinia elit laoreet.
      </p>
      <a href="#about">Learn More</a>
    </div>
  );
};

export default Home;
