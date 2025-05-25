import React from 'react';
import headshot_lg from './assets/headshot_lg.jpeg';
import headshot_m from './assets/headshot_m.jpeg';
import './style/About.css';

function About() {
  return (
    <div className='about'>
      <div id='bio'>
      <h3>Software Engineer</h3>
          <p>If I’m not in front of a computer or piece of art, you can find me hiking, biking, or practicing yoga.</p>
        <h3>Tech Stack</h3>
          <p>AWS, Azure, GCP, Terraform, Pulumi, CDK, Docker, Python, Go, TypeScript, React/React Native, JavaScript, Ruby/Rails, SQL, PostgreSQL, HTML, CSS/SASS, SCRUM/Agile Methodology</p>
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
