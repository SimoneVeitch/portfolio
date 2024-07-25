import React, { useEffect, useRef, useState } from 'react';
import gif from '../Images/head_pop.gif';

const About = () => {
  const h1Ref = useRef(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          h1Ref.current.classList.add('visible');
        } else {
          h1Ref.current.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5 
    });

    observer.observe(h1Ref.current);

    return () => observer.disconnect();
  }, []);

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  return (
    <section id="about" className="section">
      <div className="about-copy">
        <h1 ref={h1Ref} className="title-animated-text">Coding with heart<br />and enthusiasm</h1>
        <p className="about-p">
        I am just getting started on my coding journey, but I have already built a strong foundation. 
        </p>
      </div>

      {/* Profile Modal - always rendered based on showProfileModal state */}
      <div className={`profile-modal ${showProfileModal ? 'open' : ''}`}>
        <div className="profile-modal-content">
          <button className="close-modal-btn" onClick={closeProfileModal}>
            &times;
          </button>
          <h2>About Me</h2>
          <p className="profile-text">
            Hailing from Denmark, I have called Melbourne home for the last 12 years. Despite a successful career in project management spanning over a decade, I have come to realise that my passion lies in creating digital experiences rather than overseeing projects. <br /><br />
            In January 2024, I embarked on an exciting new chapter by completing Academy Xi's rigorous 18-week Front End Transform course. This immersive experience equipped me with proficiency in HTML5, CSS, JavaScript, and React.<br /><br />
            I am enthusiastic about continuing my journey in web development, dedicating myself to daily coding practice to enhance my skills and embrace new challenges.  Although I am still early in my career transition, my determination and commitment drive me to continuously learn and evolve.<br /><br />
            I am excited to transition into a role where I can apply my skills to build engaging web applications, while continuing to grow as a front-end web developer. 
          </p>
        </div>
      </div>

      {/* Button to toggle profile modal */}
      <button onClick={toggleProfileModal} className="toggle-profile-btn">
        About me
      </button>

      {/* GIF */}
      <img src={gif} alt="Face Reveal GIF" className="face-reveal-gif" />

      {/* Arrow */}
      <div className="scroll-down">
        <div className="arrow"></div>
      </div>
    </section>
  );
}

export default About;