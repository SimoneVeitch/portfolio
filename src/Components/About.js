import React from 'react';

const About = () => {
    return (
            <section id="about" className="section">
          <h1>About Section</h1>
         <div className="profile-card-wrap">
         <div className="profile-card-text-wrap">
            <h2>About Me</h2>
            <p className="profile-text">
                Some more things about me
            </p>
            </div>
            </div>
          <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
        </section>
      );
}

export default About;