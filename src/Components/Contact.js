import React from 'react';

const Contact = ({ scrollToTop }) => {
    return (
        <section id="contact" className="section">
          <h1>Contact Section</h1>
          <p>Contact me</p>
          <button className="contact-button" onClick={scrollToTop}>
          <p>Back to the top</p>
        </button>
        </section>
      );
}

export default Contact;