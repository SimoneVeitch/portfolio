import React, {useState, useEffect} from 'react';
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
              }, 1000); // Delay between sentences
            }
          }
        }, 300); // Delay between words
      };

      // Start displaying sentences
      displayNextSentence(currentSentenceIndex);
    }

    // Cleanup timer
    return () => {
      clearInterval(timer);
    };
  }, [showText, sentences, currentSentenceIndex, currentWordIndex]);

  const handleClick = () => {
    setShowText(true);
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
            {displayedSentences.map((sentence, index) => (
              <p key={index}>{sentence}</p>
            ))}
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