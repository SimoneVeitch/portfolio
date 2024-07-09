import React from 'react';

const Navbar = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact }) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={scrollToHome}>Home</li>
        <li onClick={scrollToAbout}>About</li>
        <li onClick={scrollToSkills}>Skills</li>
        <li onClick={scrollToProjects}>Projects</li>
        <li onClick={scrollToContact}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;