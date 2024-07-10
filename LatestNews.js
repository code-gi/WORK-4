import React from 'react';
import '../App.css'

// Functional component for displaying latest news
const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <h1>Latest News</h1>
      <div className="news-content">
        <div className="news-item">
          <h2>News Title 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          <p>Published: July 10, 2024</p>
        </div>
        <div className="news-item">
          <h2>News Title 2</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p>Published: July 9, 2024</p>
        </div>
        <div className="news-item">
          <h2>News Title 3</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Published: July 8, 2024</p>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;

