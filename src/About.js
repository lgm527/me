import React from 'react';
import headshot_lg from './assets/headshot_lg.jpeg';
import headshot_m from './assets/headshot_m.jpeg';
import './style/About.css';

function About() {
  return (
    <div className='about'>
      <div id='bio'>
          <p>Full stack software engineer with experience in JavaScript, React, and Ruby on Rails. Strong research, communication, and writing skills enable a high level of productivity and collaboration.</p>
        <h3>Stack</h3>
          <p>JavaScript, TypeScript, React, React Native, Ruby, Ruby on Rails, Python, SQL, PostgreSQL, AWS, Docker, HTML, CSS/SASS, Git, SCRUM/Agile Methodology</p>
      </div>
      <img
      id='me'
      src={headshot_lg}
      srcSet={`${headshot_m} 300w, ${headshot_lg} 500w`}
      sizes='(max-width: 1024px) 300px, (min-width: 1024px) 500px'
      alt='me' />
    </div>
  );
}

export default About;
