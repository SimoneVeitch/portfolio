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
                {cardData.map((card, index) => (
                    <div
                        key={card.id}
                        className="card-content"
                        style={{
                            display: index === currentCardIndex ? 'block' : 'none',
                        }}
                    >
                        {/* You can customize the card content here */}
                        <h2>{card.title}</h2>

                        <div className="icons">
                            {card.icons.map((icon, i) => (
                                <img key={i} src={icon} alt={`${card.title} icon ${i}`} className="project-icon" />
                            ))}
                        </div>

                        <img src={card.image} alt={card.title} className="project-image" />

                        <div className="project-arrow" onClick={() => toggleProjectInfo(2)}>
                        <p>Project info ➜</p>
                        </div>

                        {showProjectInfo && (
                            <div className="project-info">
                                <p>{card.info}</p>
                                <div className="buttons">
                            {card.buttons.map((button, i) => (
                                <a key={i} href={button.url} className="button" target="_blank" rel="noopener noreferrer">{button.label}</a>
                            ))}
                        </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button className="next-button" onClick={nextCard}>Next project</button>
            <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
        </section>
    );
};

export default Projects;