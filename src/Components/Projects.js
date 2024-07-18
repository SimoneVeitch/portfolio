import React, { useEffect, useRef, useState} from 'react';
import furryGif from '../Images/Screen Shot 2024-07-15 at 10.21.32.png';
import projectimage from '../Images/10197668.jpg';
import javascript from '../Images/javascript-svgrepo-com.svg';
import reactImg from '../Images/react-svgrepo-com.svg';
import html from '../Images/html-5-svgrepo-com.svg';
import  cssImg from '../Images/css3-svgrepo-com.svg';
import apiIntImg from '../Images/api-svgrepo-com.svg';
import reactRouterImg from '../Images/react-router-svgrepo-com.svg';

const Projects = () => {
    const h1Ref = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);
    const [showProjectInfoModal, setShowProjectInfoModal] = useState(false);

    const openProjectInfoModal = () => {
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
            icons: [javascript, reactImg, html, cssImg],
            image: furryGif,
            info: 'Additional information about the project...',
            buttons: [
                { label: 'Source ➜', url: 'https://example.com/source1' },
                { label: 'Live ➜', url: 'https://example.com/live1' }
            ]
        },
        {
            id: 2,
            title: 'Second one',
            icons: [javascript, reactImg, html, cssImg],
            image: projectimage,
            info: 'Different...',
            buttons: [
                { label: 'Source ➜', url: 'https://example.com/source1' },
                { label: 'Live ➜', url: 'https://example.com/live1' }
            ]
        },
    ];

    const toggleProjectInfo = () => {
        setShowProjectInfo(!showProjectInfo);
    };

    const [showProjectInfo, setShowProjectInfo] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        setShowProjectInfo(false);
    };

    return (
        <section id="projects" className="section">
        <h1 ref={h1Ref} className="title-animated-text">Projects</h1>
        <p className="project-intro">
                Let's team up, collaborate, and turn ideas into reality! <br />Be part of my journey as we create and innovate together.
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

                                <div className="project-arrow" onClick={openProjectInfoModal}>
                                    <p>Project info ➜</p>
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

                        <div className="project-arrow" onClick={openProjectInfoModal}>
                            <p>Project info ➜</p>
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
                        <h2>{cardData[currentCardIndex].title}</h2>
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
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
        </section>
    );
};

export default Projects;