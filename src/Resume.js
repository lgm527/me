import React from 'react';
import './style/Resume.css';
import resume from './assets/Laurell_McCaffrey_Resume.pdf';

class Resume extends React.Component {

  render(){
    return (
      <div className='resume'>

      <h1><a id='download' href={resume} download>Download</a></h1>
      <br></br>
      <h2>TECHNICAL PROJECTS</h2>
      <p>
      <b>TreeTrends</b> - <a href='https://github.com/lgm527/treetrends-client'>Github (Client)</a> | <a href='https://github.com/lgm527/treetrends-API'>Github (API)</a> | <a href='https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be'>Demo</a>
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
      <b>GitJobs</b> - <a href='https://github.com/lgm527/GitJobs-client'>Github (Client)</a> | <a href='https://github.com/lgm527/GitJobs_API>Github (API)'>Github (API)</a> | <a href='https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be'>Demo</a>
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
      <b>Artstagram</b> - <a href='https://github.com/lgm527/artstagram'>Github</a> | <a href='https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be'>Demo</a>
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
      <h2>TECHNICAL SKILLS</h2>
      <p>
      JavaScript, React, React Native, Ruby, Rails, Python, SQL, PostgreSQL, AWS, Docker, HTML, CSS,
      <br></br>
      Flatiron School Immersive Software Engineering Program
      <br></br><br></br>
      </p>
      <h2>EMPLOYMENT HISTORY</h2>
      <p>
      <b>The Muse</b>, New York, New York
      <br></br>
      Full Stack Engineer, February 2020 - Present
      <br></br>
      + Utilize technologies such as React, Django, Python, AWS, Postgres, and Docker
      <br></br>
      + Implement new functionality while working on the frontend and backend systems
      <br></br>
      + Collaborate with product managers, designers, and other engineers
      <br></br><br></br>
      <b>LiveAuctioneers</b>, New York, New York
      <br></br>
      Category Manager, August 2016 - December 2018
      <br></br>
      + Organized 12-20 weekly curated auctions, wrote catalogs for each
      <br></br>
      + Managed relationships with over 50 auction houses and art dealers, handled their inventory
      <br></br>
      + Operated bidder concierge service by matching buyers to items they seek
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
      <h2>EDUCATION</h2>
      <p>
      <b>Flatiron School</b> - Brooklyn, New York - 2019
      <br></br>
      + Immersive Full Stack Web Development, Ruby on Rails and JavaScript program
      <br></br><br></br>
      <b>Rutgers University</b> - New Brunswick, New Jersey - 2016
      <br></br>
      + Bachelor of Arts degree in Art History, Bachelor of Arts degree in Psychology
      <br></br>
      + Art History Graduation Ceremony Speaker, 3.4 GPA
      </p>
      <h2>VOLUNTEER</h2>
      <p>
      <b>Fraunces Tavern Museum</b> - New York, New York
      <br></br>
      Docent, 2016 - Present
      <br></br>
      + Develop, lead, and engage visitors in the rich history of New York City during the Revolution
      </p>

      <br></br>
      <h1><a id='download' href='https://github.com/lgm527/resume.json/blob/master/LGMresume.json' download>View JSON</a></h1>

      </div>
    )
  }

}

export default Resume;
