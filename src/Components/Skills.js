import React, { useState, useEffect, useRef } from 'react';
import hand from '../Images/hand.gif';
import javascript from '../Images/javascript-svgrepo-com.svg';
import reactImg from '../Images/react-svgrepo-com.svg';
import html from '../Images/html-5-svgrepo-com.svg';
import cssImg from '../Images/css3-svgrepo-com.svg';
import githubImg from '../Images/github-142-svgrepo-com.svg';
import designImg from '../Images/responsive-device-svgrepo-com.svg';
import apiIntImg from '../Images/api-svgrepo-com.svg';
import reactRouterImg from '../Images/react-router-svgrepo-com.svg';
import jiraImg from '../Images/jira-svgrepo-com.svg';
import adobeImg from '../Images/adobe-illustrator-svgrepo-com.svg';
import pmImg from '../Images/gantt-solid-svgrepo-com.svg';
import vscImg from '../Images/visual-studio-code-svgrepo-com.svg';
import npmImg from '../Images/npm-icon-svgrepo-com.svg';

const Skills = () => {
    const [displayedSkills, setDisplayedSkills] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [showMoreButton, setShowMoreButton] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); 

    const h1Ref = useRef(null);
    const skillsContainerRef = useRef(null);
    const scrollDownRef = useRef(null);

    // Array of all skills cards
    const skillsList = [
        { image: javascript, title: 'JavaScript' },
        { image: reactImg, title: 'React' },
        { image: html, title: 'HTML' },
        { image: cssImg, title: 'CSS' },
        { image: githubImg, title: 'GitHub' },
        { image: designImg, title: 'Responsive Design' },
        { image: apiIntImg, title: 'API Integration' },
        { image: reactRouterImg, title: 'React Router' },
        { image: jiraImg, title: 'Jira' },
        { image: adobeImg, title: 'Adobe Illustrator' },
        { image: pmImg, title: 'Project Management' },
        { image: vscImg, title: 'Visual Studio Code' },
        { image: npmImg, title: 'NPM' }
    ];



    useEffect(() => {
    // Display initial set of skills
    if (isSmallScreen) {
        setDisplayedSkills(skillsList.slice(startIndex, startIndex + 4));
    } else {
        setDisplayedSkills(skillsList);
    }
}, [isSmallScreen, skillsList, startIndex]);


    useEffect(() => {
        // Intersection observer for h1Ref
        const h1Observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.5 // Adjust as needed
        });

        if (h1Ref.current) {
            h1Observer.observe(h1Ref.current);
        }

        return () => {
            h1Observer.disconnect();
        };
    }, []);

    const handleShowMoreSkills = () => {
        const nextStartIndex = startIndex + 4;

        if (nextStartIndex <= skillsList.length) {
            setDisplayedSkills(skillsList.slice(startIndex, nextStartIndex));
            setStartIndex(nextStartIndex >= skillsList.length ? 0 : nextStartIndex);
        } else {
            const remainingSkills = nextStartIndex - skillsList.length;
            const wrappedSkills = skillsList.slice(0, remainingSkills);
            const skillsToShow = skillsList.slice(startIndex).concat(wrappedSkills);

            setDisplayedSkills(skillsToShow.slice(0, 4));
            setStartIndex(remainingSkills);
        }

        if (nextStartIndex >= skillsList.length) {
            setShowMoreButton(false);
        }
    };

    useEffect(() => {
        // Intersection observer for skillsContainerRef
        const skillsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.skills-card').forEach(card => {
                        card.classList.add('visible');
                    });
                } else {
                    entry.target.querySelectorAll('.skills-card').forEach(card => {
                        card.classList.remove('visible');
                    });
                }
            });
        }, {
            threshold: 0.5 // Adjust as needed
        });

        if (skillsContainerRef.current) {
            skillsObserver.observe(skillsContainerRef.current);
        }

        return () => {
            skillsObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        // Intersection observer for scrollDownRef
        const scrollDownObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    scrollDownRef.current.style.display = 'flex'; // Show scroll-down div
                } else {
                    scrollDownRef.current.style.display = 'none'; // Hide scroll-down div
                }
            });
        }, {
            threshold: 1 // Trigger when the component is fully in view
        });

        if (scrollDownRef.current) {
            scrollDownObserver.observe(scrollDownRef.current);
        }

        return () => {
            scrollDownObserver.disconnect();
        };
    }, []);

    return (
        <section id="skills" className="section">
            <h1 ref={h1Ref} className="title-animated-text">Skills</h1>
            <p>
                Let's team up, collaborate, and turn ideas into reality! <br />Be part of my journey as we create and innovate together.
            </p>

            <div ref={skillsContainerRef} className="skills-container">
                {/* Displayed skills */}
                {displayedSkills.map((skill, index) => (
                    <div key={index} className="skills-card">
                        <div className="skills-content">
                            <img src={skill.image} alt={skill.title} className="skills-icon" />
                            <h2>{skill.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* More skills button */}
            {showMoreButton && (
                <button className="more-skills-button" onClick={handleShowMoreSkills}>
                    More skills
                </button>
            )}

            {/* Hand clicking button GIF */}
            <img src={hand} alt="Hand clicking button GIF" className="hand-gif" />

    
            <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
        </section>
    );
};

export default Skills;