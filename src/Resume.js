import React from 'react';
import './style/Resume.css';
import resume from './assets/McCaffrey_Resume.pdf'

class Resume extends React.Component {

  render(){
    return (
      <div className='resume'>
      <h1><a id='download' href={resume} download>Download</a></h1>
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
      JavaScript, React, Redux, Ruby, Rails, SQL, PostgreSQL, HTML, CSS, SASS,
      <br></br>
      Flatiron School Immersive Software Engineering Program
      <br></br><br></br>
      </p>
      <h2>EMPLOYMENT HISTORY</h2>
      <p>
      <b>LiveAuctioneers</b>, New York, New York
      <br></br>
      Category Manager, 2016 - 2018
      <br></br>
      + Organized 12-20 weekly curated auctions, wrote catalogs for each
      <br></br>
      + Managed relationships with over 50 auction houses and art dealers, handled their inventory
      <br></br>
      + Operated bidder concierge service by matching buyers to items they seek
      <br></br><br></br>
      <b>No Longer Empty</b>, New York, New York
      <br></br>
      Curatorial & Engagement Intern, 2015 - 2015
      <br></br>
      + Curatorial research on artists, venues, and public programming
      <br></br>
      + Managed social media accounts (Facebook, Twitter)
      <br></br>
      + Engagement with visitors and assisting with public programs at exhibitions
      <br></br><br></br>
      <b>The Center for Contemporary Art</b>, Bedminster, New Jersey
      <br></br>
      Curatorial Intern, 2014 - 2015
      <br></br>
      + Curated contemporary realist exhibition with artist Mel Leipzig
      <br></br>
      + Facilitated silent auction
      <br></br>
      + Art handling, exhibition Installation and deinstallation
      <br></br><br></br>
      </p>
      <h2>EDUCATION</h2>
      <p>
      <b>Flatiron School</b> - 2019
      <br></br>
      + Immersive Full Stack Web Development, Ruby on Rails and JavaScript program
      <br></br><br></br>
      <b>Rutgers University</b> - New Brunswick, New Jersey - 2016
      <br></br>
      + Bachelor of Arts degree in Art History, Bachelor of Arts degree in Psychology
      <br></br>
      + Art History Graduation Ceremony Speaker, 3.4 GPA</p>


      </div>
    )
  }

}

export default Resume;
