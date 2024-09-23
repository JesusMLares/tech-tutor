import React from 'react';
import Navbar from '../../components/navbar/navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <h1>Welcome to Tech Tutor</h1>
        <p>Find your perfect coding mentor today!</p>
      </div>
    </div>
  );
}

export default Home;