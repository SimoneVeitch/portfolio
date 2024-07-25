import React, { useEffect, useRef, useState } from 'react';
import furryGif from '../Images/furry_fave_sceen.png';
import javascript from '../Images/javascript-svgrepo-com.svg';
import reactImg from '../Images/react-svgrepo-com.svg';
import html from '../Images/html-5-svgrepo-com.svg';
import cssImg from '../Images/css3-svgrepo-com.svg';
import apiIntImg from '../Images/api-svgrepo-com.svg';
import reactRouterImg from '../Images/react-router-svgrepo-com.svg';
import bedtime from '../Images/bedtime_screen.png';
import climate from '../Images/climate_screen.png';

const Projects = () => {
    const h1Ref = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);
    const [showProjectInfoModal, setShowProjectInfoModal] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const openProjectInfoModal = (index) => {
        setCurrentCardIndex(index);
        setShowProjectInfoModal(true);
    };

    const closeProjectInfoModal = () => {
        setShowProjectInfoModal(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1440);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const cardData = [
        {
            id: 1,
            title: 'Furry Fave',
            icons: [javascript, reactImg, html, cssImg, apiIntImg],
            image: furryGif,
            info: `The Furry Fave web application is my response to the Academi Xi Front-End Web Development: Transform course, Phase 1 Project, which focused on Javascript.\n\nFurry Fave is a mock competition, where dogs of all sizes, qualities and barks compete to win Furry Fave of the year. On the Furry Fave website users can scroll through a gallery of this year’s contestants and like their favourite dog to help the Furry Fave judges decide who should win Furry Fave 2024. \n\nUsers can also add their own dog to the competition by submitting a form with their dog’s details.\n\nThe site is a HTML/CSS/JS frontend that accesses data from a json-server. I have deployed my json-server on Render, which is where I am fetching my data from for this project. The web application runs on a single page, using event listeners and loop iterations to fetch, patch and display data.`,
            buttons: [
                { label: 'Source ➜', url: 'https://github.com/SimoneVeitch/furry-fave' },
                { label: 'Live ➜', url: 'https://simoneveitch.github.io/furry-fave/' }
            ]
        },
        {
            id: 2,
            title: 'Climate Change Directory',
            icons: [javascript, reactImg, html, cssImg, apiIntImg, reactRouterImg],
            image: climate,
            info: `The Climate Action Directory web application is my response to the Academi Xi Front-End Web Development: Transform course, Phase 2 Project, which focused on React.\n\nThe web aplication lists organisations actively combating the climate crisis, conveniently categorised for user\'s ease. The web applications is a React single page application using create-react-app that accesses data from a json-server.\n\nThe web application uses multiple components to keep my code well organised, with more than three client-side routes using React Router.\n\nI am using a json-server to create a RESTful API for my backend and am making both a GET and a POST request to the json server, using a form to make my post request, specifically a controlled form/component. `,
            buttons: [
                { label: 'Source ➜', url: 'https://github.com/SimoneVeitch/climate-change-directory' },
                { label: 'Live ➜', url: 'https://simoneveitch.github.io/climate-change-directory/' }
            ]
        },
        {
            id: 3,
            title: 'Bedtime Adventures',
            icons: [javascript, reactImg, html, cssImg, reactRouterImg],
            image: bedtime,
            info: `Bedtime Adventures is a simple game, where users can select from a number of items to try to get "their" kid to fall asleep.\n\nIt is my first personal React build, built to continue elavating my React proficiency.\n\nThe application uses extensive conditional rendering to achieve a dynamic, game-like feel.`,
            buttons: [
                { label: 'Source ➜', url: 'https://github.com/SimoneVeitch/bedtime-adventures' },
                { label: 'Live ➜', url: 'https://simoneveitch.github.io/bedtime-adventures/' }
            ]
        },
    ];

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    };

    return (
        <section id="projects" className="section">
            <h1 ref={h1Ref} className="title-animated-text">Projects</h1>
            <p className="project-intro">
                Scroll through my projects to see what I have been building. Check back weekly for new additions as I code daily to sharpen my skills! 
            </p>

            <div className="card-gallery">
                {isLargeScreen ? (
                    // Display all project cards next to each other on screens larger than 1440px
                    <div className="card-gallery-large">
                        {cardData.map((card) => (
                            <div key={card.id} className="card-content">
                                <h2>{card.title}</h2>

                                <div className="icons">
                                    {card.icons.map((icon, i) => (
                                        <img key={i} src={icon} alt={`${card.title} icon ${i}`} className="project-icon" />
                                    ))}
                                </div>

                                <img src={card.image} alt={card.title} className="project-image" />

                                <div className="project-btn" onClick={() => openProjectInfoModal(card.id - 1)}>
                                    <p className="project-btn-p">Project info ➜</p>
                                </div>


                            </div>
                        ))}
                    </div>
                ) : (
                    // Display only one project card at a time on screens smaller than or equal to 1440px
                    <div className="card-content">
                        <h2>{cardData[currentCardIndex].title}</h2>

                        <div className="icons">
                            {cardData[currentCardIndex].icons.map((icon, i) => (
                                <img key={i} src={icon} alt={`${cardData[currentCardIndex].title} icon ${i}`} className="project-icon" />
                            ))}
                        </div>

                        <img src={cardData[currentCardIndex].image} alt={cardData[currentCardIndex].title} className="project-image" />

                        <div className="project-btn" onClick={() => openProjectInfoModal(currentCardIndex)}>
                            <p className="project-btn-p">Project info ➜</p>
                        </div>


                    </div>
                )}
            </div>

            {/* Project Info Modal */}
            {showProjectInfoModal && (
                <div className="profile-modal open">
                    <div className="profile-modal-content">
                        <button className="close-modal-btn" onClick={closeProjectInfoModal}>
                            &times;
                        </button>
                        <h2 className="profile-text-h2">{cardData[currentCardIndex].title}</h2>
                        <p className="profile-text">
                            {cardData[currentCardIndex].info}
                        </p>
                        <div className="buttons">
                            {cardData[currentCardIndex].buttons.map((button, i) => (
                                <a key={i} href={button.url} className="button" target="_blank" rel="noopener noreferrer">{button.label}</a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Display next button only on screens smaller than or equal to 1440px */}
            {!isLargeScreen && (
                <button className="next-button" onClick={nextCard}>Next project</button>
            )}

            <div className="scroll-down">
                <div className="arrow"></div>
            </div>
        </section>
    );
};

export default Projects;