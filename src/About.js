import React from 'react';
import me from  './assets/me.jpeg';
import './style/About.css';

function About() {
  return (
    <div className="about">
      <div id='bio'>
        <p>Full stack software engineer with experience in JavaScript/TypeScript, React/Redux and Ruby on Rails. Strong research, communication, and writing skills enable a high level of productivity and collaboration. If I’m not in front of a computer or piece of art, you can find me hiking or biking somewhere with more trees than people.</p>
        <h3>Stack</h3>
          JavaScript, React, React Native, Ruby, Ruby on Rails, Python, SQL, PostgreSQL, AWS, Docker, HTML, CSS/SASS, Git, SCRUM/Agile Methodology
      </div>
      <img id='me' src={me} alt='me' />
    </div>
  );
}

export default About;
