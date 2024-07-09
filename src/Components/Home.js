import React, {useState, useEffect} from 'react';
import woman from '../Images/happy-woman-greeting-with-hi-gesture-waving-with-hand-smiling-portrait-friendly-female-saying-hello-welcoming-smb-flat-vector-illustration-isolated-white-background.png';

const Home = () => {
    const [showText, setShowText] = useState(false);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [currentWords, setCurrentWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

const sentences = [
    "Hi! I'm Simone.",
    "A junior front end developer.",
  ];

  useEffect(() => {
    if (showText) {
      const sentence = sentences[currentSentenceIndex];
      const words = sentence.split(' ');

      const timer = setTimeout(() => {
        if (currentWordIndex < words.length) {
          setCurrentWords(prevWords => [...prevWords, words[currentWordIndex]]);
          setCurrentWordIndex(prevIndex => prevIndex + 1);
        } else {
          setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % sentences.length);
          setCurrentWords([]);
          setCurrentWordIndex(0);
        }
      }, 500); // Adjust the timeout delay as needed

      return () => clearTimeout(timer);
    }
  }, [showText, currentSentenceIndex, currentWordIndex]);

  const handleClick = () => {
    setShowText(true); // Trigger text display on click
  };

  return (
       <section id="home" className="section">
      {!showText ? (
        <div className="image-container">
          <img
            src={woman}
            alt="Simone"
            className="center-image"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className="content-container">
          <div className="image-left">
            <img
              src={woman}
              alt="Simone"
              className="left-image"
            />
          </div>
          <div className="text-right">
          <p>{currentWords.join(' ')}</p>
          </div>
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