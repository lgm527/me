import React from 'react';
import headshot from  './assets/headshot.jpeg';
import './style/About.css';

function About() {
  return (
    <div className="about">
      <div id='bio'>
        <p>Full stack software engineer with experience in JavaScript/TypeScript, React/Redux and Ruby on Rails. Strong research, communication, and writing skills enable a high level of productivity and collaboration.</p>
        <h3>Stack</h3>
          JavaScript, TypeScript, React, React Native, Ruby, Ruby on Rails, Python, SQL, PostgreSQL, AWS, Docker, HTML, CSS/SASS, Git, SCRUM/Agile Methodology
      </div>
      <img id='me' src={headshot} alt='me' />
    </div>
  );
}

export default About;
