import React from 'react';

const Home = ({ id, currentSection }) => {
  return (
    <section id={id} className={`section ${currentSection ? 'in-view' : ''}`}>
      <h1>Home Section</h1>
      <p>Welcome to my portfolio!</p>
    </section>
  );
}

export default Home;