import React from 'react';
import me from  './assets/me.jpeg';
import './style/About.css';

function About() {
  return (
    <div className="about">
      <div id='bio'>
        <p>Full stack software engineer with experience in JavaScript, React, and Ruby on Rails combined with a strong enthusiasm for connecting tech, art, and people. Found web development while cataloguing art at an auction software company. Strong development, research, and writing skills to support team productivity and collaboration. If I’m not in front of a computer or piece of art, you can find me hiking or biking somewhere with more trees than people.</p>
          <h3>Tech Stack</h3>
          JavaScript, React, React Native, Ruby, Rails, SQL, PostgreSQL, HTML, CSS, Git
      </div>
      <img id='me' src={me} alt='me' />
    </div>
  );
}

export default About;
