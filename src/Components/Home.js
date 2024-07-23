import React, { useState, useEffect } from 'react';
import idle from '../Images/large_idle.gif';
import wave from '../Images/large_wave_new.gif';

const Home = ( {scrollToBottom}) => {
  const [showText, setShowText] = useState(false);
  const [sentences] = useState([
    "Hi! I'm Simone.",
    "A junior front end developer.",
  ]);
  const [displayedSentences, setDisplayedSentences] = useState([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    let timer;

    if (showText) {
      const displayNextSentence = (index) => {
        const sentence = sentences[index];
        const words = sentence.split(' ');

        timer = setInterval(() => {
          if (currentWordIndex < words.length) {
            setDisplayedSentences((prevSentences) => {
              const updatedSentences = [...prevSentences];
              updatedSentences[index] = words.slice(0, currentWordIndex + 1).join(' ');
              return updatedSentences;
            });
            setCurrentWordIndex(currentWordIndex + 1); 
          } else {
            clearInterval(timer);
            if (index + 1 < sentences.length) {
              setTimeout(() => {
                setCurrentSentenceIndex(index + 1); 
                setCurrentWordIndex(0); 
              }, 300); 
            }
          }
        }, 100); 
      };

      displayNextSentence(currentSentenceIndex);
    }

    return () => {
      clearInterval(timer);
    };
  }, [showText, sentences, currentSentenceIndex, currentWordIndex]);

  const handleClick = () => {
    setTimeout(() => {
      setShowCircle(true);
    }, 4000); 
    setShowText(true); 
  };

  return (
    <section id="home" className="section">
      {!showText ? (
        // Initial disolay
        <div className="image-container">
          <img
            src={idle}
            alt="Simone"
            className="center-image"
            onClick={handleClick}
          />
          <div className="click-circle" onClick={handleClick}>
              <svg viewBox="0 0 300 300">
                <defs>
                  <path id="circlePath" d="M 150, 150 m -75, 0 a 75,75 0 0,1 150,0 a 75,75 0 0,1 -150,0 " />
                </defs>
                <circle cx="150" cy="150" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text fill="#fff" fontSize="40">
                    <textPath xlinkHref="#circlePath">Click Me</textPath>
                  </text>
                </g>
              </svg>
            </div>
        </div>
      ) : (
        // After click display
        <div className="content-container">
          <div className="image-left">
            <img
              src={wave}
              alt="Simone"
              className="left-image"
            />
          </div>
          <div className="text-right">
            {displayedSentences.map((sentence, index) => (
              <p key={index}>{sentence}</p>
            ))}
          </div>
          {showCircle && (
            <div className="home-circle" onClick={scrollToBottom}>
              <svg viewBox="0 0 300 300">
                <defs>
                  <path id="circlePath" d="M 150, 150 m -75, 0 a 75,75 0 0,1 150,0 a 75,75 0 0,1 -150,0 " />
                </defs>
                <circle cx="150" cy="150" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text fill="#fff" fontSize="40">
                    <textPath xlinkHref="#circlePath">Hire Me</textPath>
                  </text>
                </g>
              </svg>
            </div>
          )}
        </div>
      )}

      <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
    </section>
  );
}

export default Home;