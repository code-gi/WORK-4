import React from 'react';
import '../App.css';

const Sports = () => {
  return (
    <div className="sports">
      <h1>Sports News</h1>
      <div className="news-item">
        <h2>Sport Event 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis eros, ultricies vel felis in, lobortis vestibulum lorem.</p>
      </div>
      <div className="news-item">
        <h2>Sport Update 2</h2>
        <p>Integer venenatis velit at ipsum feugiat, non gravida lacus vehicula. Aliquam erat volutpat.</p>
      </div>
      <div className="news-item">
        <h2>Sport Championship 3</h2>
        <p>Curabitur sit amet augue fermentum, dapibus elit sed, auctor elit. Vestibulum eu risus sit amet libero ultrices.</p>
      </div>
    </div>
  );
}

export default Sports;
