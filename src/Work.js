import React from 'react';
import './style/Work.css';
import art from './assets/artstagram.png';
import gitjobs from './assets/gitjobs.png';
import tre from './assets/tretre.png';
import cfs from './assets/cfs.png';

class Work extends React.Component {

  startingState = {
    show: false,
    name: '',
    description: '',
    demo: '',
    github: [],
    img: ''
  }

  state = this.startingState

  goBack = () => {
    this.setState(this.startingState)
  }

  handleClick = (project) => {
    if (project === 'tree'){
      this.setState({
        name: 'TreeTrends',
        description: 'Users can locate trees on the NYC streets near them for stewardship opportunities as well as browse data from the 2015 NYC Street Tree Census.',
        demo: 'https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be',
        github: ['https://github.com/lgm527/treetrends-client', 'https://github.com/lgm527/treetrends-API'],
        img: tre
      })
    } else if (project === 'git') {
      this.setState({
        name: 'GitJobs or Die Pryin',
        description: 'Users can locate jobs postings on Github and save them to their profile with links to apply.',
        demo: 'https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be',
        github: ['https://github.com/lgm527/GitJobs-client', 'https://github.com/lgm527/GitJobs_API'],
        img: gitjobs
      })
    } else if (project === 'art') {
      this.setState({
        name: 'Artstagram',
        description: 'User can view artwork by Van Gogh, as well as like, and leave comments.',
        demo: 'https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be',
        github: ['https://github.com/lgm527/artstagram'],
        img: art
      })
    } else if  (project === 'cfs') {
      this.setState({
        name: 'Connect For Success',
        description: 'Dress For Success solution to bridge the networking gap for women. Connect for Success is a connection tool used to match current DFS clients with volunteers for needs-based skills sharing, and creates a way to match women based on shared background and other parameters. Project for the LYLAS Labs Women@Work Hackathon.',
        demo: 'https://www.youtube.com/watch?v=L2SrzwwOh-I&feature=youtu.be',
        github: ['https://github.com/lgm527/connectforsuccess/tree/laurell'],
        img: cfs
      })
    }
    this.setState({show: true})
  }

  showGitHubs = () => {
    return this.state.github.map((link, i) => {return <p key={i}><a href={link}>Github {i+1}</a></p>})
  }

  render(){
    return (
      <div className='container'>

      { this.state.show ?
        <div className='show'>
          <h2><span id='x' onClick={this.goBack}>✖︎</span></h2>
          <div id='showText'>
          <h2>{this.state.name}</h2>
          <p key='description'><i>{this.state.description}</i></p>
          <p key='demo'><a href={this.state.demo}>Demo</a></p>
          {this.showGitHubs()}
          </div>
        </div>
        :
        <div className="projects">
          <div>
            <img id='tre' src={tre} alt='tree' onClick={() => {this.handleClick('tree')}}/>
          </div>

          <div>
            <img src={gitjobs} alt='git' onClick={() => {this.handleClick('git')}}/>
          </div>

          <div>
            <img src={art} alt='art' onClick={() => {this.handleClick('art')}}/>
          </div>

          <div>
            <img src={cfs} alt='cfs' onClick={() => {this.handleClick('cfs')}}/>
          </div>
        </div>
    }

      </div>
    )
  }

}

export default Work;
