import React, { useState, useEffect, useRef } from 'react';
import javascript from '../Images/javascript-svgrepo-com.svg';
import reactImg from '../Images/react-svgrepo-com.svg';
import html from '../Images/html-5-svgrepo-com.svg';
import cssImg from '../Images/css3-svgrepo-com.svg';
import githubImg from '../Images/github-142-svgrepo-com.svg';
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
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const h1Ref = useRef(null);
    const skillsContainerRef = useRef(null);
    const scrollDownRef = useRef(null);

    const skillsList = [
        { image: javascript, title: 'JavaScript' },
        { image: reactImg, title: 'React' },
        { image: html, title: 'HTML' },
        { image: cssImg, title: 'CSS' },
        { image: githubImg, title: 'GitHub' },
        { image: apiIntImg, title: 'API Integration' },
        { image: reactRouterImg, title: 'React Router' },
        { image: jiraImg, title: 'Jira' },
        { image: adobeImg, title: 'Adobe Illustrator' },
        { image: pmImg, title: 'Project Management' },
        { image: vscImg, title: 'Visual Studio Code' },
        { image: npmImg, title: 'NPM' }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1440);
        };

        setIsSmallScreen(window.innerWidth < 1440);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let newDisplayedSkills = [];
        let newShowMoreButton = false;

        if (isSmallScreen) {
            newDisplayedSkills = skillsList.slice(startIndex, startIndex + 4);
            newShowMoreButton = true;
        } else {
            newDisplayedSkills = skillsList;
            newShowMoreButton = false;
        }

        // Check if the new state is different before updating
        if (!arraysEqual(newDisplayedSkills, displayedSkills)) {
            setDisplayedSkills(newDisplayedSkills);
        }

        if (newShowMoreButton !== showMoreButton) {
            setShowMoreButton(newShowMoreButton);
        }
    }, [isSmallScreen, skillsList, startIndex, displayedSkills, showMoreButton]);

// Utility function to compare arrays
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].image !== arr2[i].image || arr1[i].title !== arr2[i].title) {
            return false;
        }
    }
    return true;
}
    useEffect(() => {
        const h1Observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.5 
        });

        if (h1Ref.current) {
            h1Observer.observe(h1Ref.current);
        }

        return () => {
            h1Observer.disconnect();
        };
    }, []);

    const handleShowMoreSkills = () => {
        const nextStartIndex = (startIndex + 4) % skillsList.length;
        const nextSkills = skillsList.slice(nextStartIndex, nextStartIndex + 4);

        setStartIndex(nextStartIndex);
        setDisplayedSkills(nextSkills);
        setShowMoreButton(nextStartIndex !== 0);
    };

    useEffect(() => {
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
            threshold: 0.5 
        });

        if (skillsContainerRef.current) {
            skillsObserver.observe(skillsContainerRef.current);
        }

        return () => {
            skillsObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const scrollDownObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    scrollDownRef.current.style.display = 'flex'; 
                } else {
                    scrollDownRef.current.style.display = 'none'; 
                }
            });
        }, {
            threshold: 1 
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
            Check out my skills below - I am learning and growing every day!
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

            <div className="scroll-down">
                <div className="arrow"></div>
            </div>
        </section>
    );
};

export default Skills;