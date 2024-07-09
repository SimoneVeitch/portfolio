import React from 'react';

const Contact = ({ id, currentSection }) => {
    return (
        <section id={id} className={`section ${currentSection ? 'in-view' : ''}`}>
          <h1>Contact Section</h1>
          <p>Contact me</p>
        </section>
      );
}

export default Contact;