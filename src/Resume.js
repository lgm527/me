import React from 'react';
import './style/Resume.css';
import resume from './assets/Laurell_McCaffrey_Resume.pdf';

class Resume extends React.Component {

  render(){
    return (
      <div className='resume'>

      <h1><a id='download' href={resume} download>Download</a></h1>
      <br></br>

      <h2>TECHNICAL SKILLS</h2>
      <p>
      React, Redux, React Native, JavaScript, TypeScript, Ruby, Rails, Python, SQL, PostgreSQL, AWS, Docker, HTML, CSS/SASS, SCRUM/Agile Methodology
      <br></br><br></br>
      </p>

      <h2>EMPLOYMENT HISTORY</h2>
      <p>
      <b>The Muse</b>, New York, New York
      <br></br>
      Full Stack Engineer, February 2020 - March 2020 <span id='covid'>(COVID-19)</span>
      <br></br>
      + Collaborated with product managers, designers, and engineers to implement website functionality that increased candidate application rate
      <br></br>
      + Coded in React, TypeScript, CSS, HTML, utilized Storybook to implement ADA compliant designs
      <br></br>
      + Participated in SCRUM stand-ups, grooming/planning, demo, and retro meetings
      <br></br><br></br>
      <b>My Software Engineer Training Program</b>, New York, New York
      <br></br>
      Full Stack Engineer, January 2019 - January 2020
      <br></br>
      + Envisioned and executed full time self directed and formal coding education program
      <br></br>
      + January - June: Self taught JavaScript, HTML, CSS, plus 200 hour bootcamp pre-course work
      <br></br>
      + June - October: Full time curriculum in JavaScript, React, Redux, Ruby, Rails
      <br></br>
      + October - January: Projects, networking, volunteering, continuing education and seeking full time employment that resulted in multiple job offers
      <br></br><br></br>
      <b>LiveAuctioneers</b>, New York, New York
      <br></br>
      Category Manager, August 2016 - December 2018
      <br></br>
      + Wrote catalogs with HTML and organized 20+ weekly curated auctions
      <br></br>
      + Managed relationships with over 50 auction houses and art dealers, handled their inventory
      <br></br>
      + Composed SQL queries to match buyers with items
      <br></br><br></br>
      <b>No Longer Empty</b>, New York, New York
      <br></br>
      Curatorial & Engagement Intern, June 2015 - August 2015
      <br></br>
      + Curatorial research on artists, venues, and public programming
      <br></br>
      + Managed social media accounts (Facebook, Twitter)
      <br></br>
      + Engagement with visitors and assisting with public programs at exhibitions
      <br></br><br></br>
      </p>

      <h2>TECHNICAL PROJECTS</h2>
      <p>
      <b>TreeTrends</b> - <a href='https://github.com/lgm527/treetrends-client' target='_blank' rel='noopener noreferrer'>Github (Client)</a> | <a href='https://github.com/lgm527/treetrends-API' target='_blank' rel='noopener noreferrer'>Github (API)</a> | <a href='https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be' target='_blank' rel='noopener noreferrer'>Demo</a>
      <br></br>
      Users can locate trees on the NYC streets near them for stewardship opportunities
      <br></br>
      + Connected with the NYC Open Data API extract data from 2015 Street Tree Census
      <br></br>
      + Implemented a React based front-end and vanilla CSS for styling
      <br></br>
      + Built a Google Maps API to render interactive google-style map
      <br></br>
      + Established a Ruby on Rails API backend with endpoints for users and trees
      <br></br><br></br>
      <b>GitJobs</b> - <a href='https://github.com/lgm527/GitJobs-client' target='_blank' rel='noopener noreferrer'>Github (Client)</a> | <a href='https://github.com/lgm527/GitJobs_API>Github (API)' target='_blank' rel='noopener noreferrer'>Github (API)</a> | <a href='https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be' target='_blank' rel='noopener noreferrer'>Demo</a>
      <br></br>
      Users can locate jobs postings on Github and save them to their profile with links to apply
      <br></br>
      + Coded a user interface with React and Sass for styling
      <br></br>
      + Scraped Github Job API to pull and parse job postings data
      <br></br>
      + Developed a Ruby on Rails API backend for job postings and users
      <br></br>
      + Employed JSON Web Tokens and localStorage to store encrypted user information on client-side
      <br></br><br></br>
      <b>Artstagram</b> - <a href='https://github.com/lgm527/artstagram' target='_blank' rel='noopener noreferrer'>Github</a> | <a href='https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be' target='_blank' rel='noopener noreferrer'>Demo</a>
      <br></br>
      User can view artwork by Van Gogh, as well as like, and leave comments
      <br></br>
      + Constructed a Javascript rendering front-end
      <br></br>
      + Handled the Met Museum API to provide images of artwork by Van Gogh
      <br></br>
      + Operated Ruby on Rails controls the back-end, models and controllers of MVC
      <br></br>
      + Utilized Semantic UI to contribute to the minimalist style
      <br></br><br></br>
      </p>

      <h2>VOLUNTEER</h2>
      <p>
      <b>Fraunces Tavern Museum</b>, New York, New York
      <br></br>
      Docent, 2016 - Present
      <br></br>
      + Bring the rich history of New York City during the Revolutionary War to life leading weekly tours
      </p>

      <h2>EDUCATION</h2>
      <p>
      <b>Flatiron School</b>, Brooklyn, New York - 2019
      <br></br>
      + Immersive Full Stack Web Development, Ruby on Rails and JavaScript program
      <br></br><br></br>
      <b>Rutgers University</b> - New Brunswick, New Jersey - 2016
      <br></br>
      + Bachelor of Arts degrees in Art History and Psychology
      <br></br>
      + Art History Graduation Ceremony Speaker, 3.4 GPA
      </p>

      <br></br>
      <h1><a id='download' href='https://github.com/lgm527/resume.json/blob/master/LGMresume.json' target='_blank' rel='noopener noreferrer'>View JSON</a></h1>

      </div>
    )
  }

}

export default Resume;
