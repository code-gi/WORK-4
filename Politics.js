import React from 'react';
import '../App.css';

const Politics = () => {
  return (
    <div className="politics">
      <h1>Politics News</h1>
      <div className="news-item">
        <h2>Political Event 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis eros, ultricies vel felis in, lobortis vestibulum lorem.</p>
      </div>
      <div className="news-item">
        <h2>Political Issue 2</h2>
        <p>Integer venenatis velit at ipsum feugiat, non gravida lacus vehicula. Aliquam erat volutpat.</p>
      </div>
      <div className="news-item">
        <h2>Political Development 3</h2>
        <p>Curabitur sit amet augue fermentum, dapibus elit sed, auctor elit. Vestibulum eu risus sit amet libero ultrices.</p>
      </div>
    </div>
  );
}

export default Politics;
