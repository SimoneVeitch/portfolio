import React, {useState, useEffect, useRef} from 'react';
import woman from '../Images/happy-woman-greeting-with-hi-gesture-waving-with-hand-smiling-portrait-friendly-female-saying-hello-welcoming-smb-flat-vector-illustration-isolated-white-background.png';

const Home = () => {
    const [showText, setShowText] = useState(false);
  const [sentences] = useState([
    "Hi! I'm Simone.",
    "A junior front end developer.",
  ]);
  const [displayedSentences, setDisplayedSentences] = useState([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const circleTextRef = useRef(null);
  const [showCircle, setShowCircle] = useState(false);


    // Effect to manage text animation

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
            setCurrentWordIndex(currentWordIndex + 1); // Increment word index
          } else {
            clearInterval(timer);
            if (index + 1 < sentences.length) {
              setTimeout(() => {
                setCurrentSentenceIndex(index + 1); // Move to next sentence
                setCurrentWordIndex(0); // Reset word index for new sentence
              }, 300); // Delay between sentences
            }
          }
        }, 100); // Delay between words
      };

      // Start displaying sentences
      displayNextSentence(currentSentenceIndex);
    }

    // Cleanup timer
    return () => {
      clearInterval(timer);
    };
  }, [showText, sentences, currentSentenceIndex, currentWordIndex]);

  // Handler for handling click event on image
  const handleClick = () => {
    setTimeout(() => {
      setShowCircle(true);
    }, 4000); // Delay for 5 seconds to show the circle
    setShowText(true); // Immediately show the text
  };

  return (
       <section id="home" className="section">
      {!showText ? (
        // Display initial image and handle click event
        <div className="image-container">
          <img
            src={woman}
            alt="Simone"
            className="center-image"
            onClick={handleClick}
          />
        </div>
      ) : (
        // Display content after text is shown
        <div className="content-container">
          <div className="image-left">
            <img
              src={woman}
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
          <div className="home-circle">
        </div>
        )}
      </div>
      )}
      <div className="mobile-cta"></div>
      <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
    </section>
  );
}

export default Home;