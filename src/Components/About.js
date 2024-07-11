import React, { useEffect, useRef } from 'react';
import gif from '../Images/face-reveal.gif';

const About = () => {
    const h1Ref = useRef(null);

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
            threshold: 0.5 // Adjust as needed
        });

        observer.observe(h1Ref.current);

        return () => observer.disconnect();
    }, []);

    return (
            <section id="about" className="section">
                <div className="about-copy">
          <h1 ref={h1Ref} className="title-animated-text">Coding with heart<br />and enthusiasm</h1>
          <p>
          Let's team up, collaborate, and turn ideas into reality! <br />Be part of my journey as we create and innovate together.
          </p>
          </div>

          {/* Profile Card */}
         <div className="profile-card-wrap">
         <div className="profile-card-text-wrap">
            <h2>About Me</h2>
            <p className="profile-text">
          Hailing from Denmark, I've called Melbourne home for the last 12 years. Despite a successful career in project management spanning over a decade, I have come to realise that my passion lies in creating digital experiences rather than overseeing projects. <br /><br />
          In January 2024 I embarked on an exciting new chapter by completing Academy Xi's rigorous 18-week Front End Transform course. This immersive experience equipped me with proficiency in HTML5, CSS, JavaScript, and React.<br /><br />
          I am enthusiastic about continuing my journey in web development, dedicating myself to daily coding practice to enhance my skills and embrace new challenges. Every day brings opportunities for growth and mastery.<br /><br />
          Beyond the screen, I cherish time with family and friends, exploring the outdoors, nurturing creativity through various mediums, and indulging in the magic of movies and music.<br /><br />
          Although I am still early in my career transition, my determination and commitment drive me to continuously learn and evolve.
            </p>
            </div>
    </div>

     {/* GIF */}
     <img src={gif} alt="Face Reveal GIF" className="face-reveal-gif" />

 {/* Arrow */}
          <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
        </section>
      );
}

export default About;