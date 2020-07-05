import React from 'react';
import './style/Work.css';
import art from './assets/artstagram.png';
import gitjobs from './assets/gitjobs.png';
import tre from './assets/tretre.png';
import cfs from './assets/cfs.png';
import dad from './assets/dad.png';
import calc from './assets/calc.png';
import ttm from './assets/tretremobile.png';
import gwm from './assets/gwmobileview.png';
import tt2 from './assets/tt2.png';

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
    } else if (project === 'tt2') {
      this.setState({
        name: 'TreeTrends2.0',
        description: 'Users can locate trees on the NYC streets near them for stewardship opportunities and email the tree\'s information.',
        demo: 'https://lgm527.github.io/tt2',
        github: ['https://github.com/lgm527/tt2'],
        img: tt2
      })
    } else if (project === 'treemobile') {
      this.setState({
        name: 'TreeTrends Mobile',
        description: 'Users can locate trees on the NYC streets near them for stewardship opportunities on their mobile device and share a tree\'s information via text, email, or launching the maps application.',
        demo: 'https://expo.io/@lgm527/tree_trends',
        github: ['https://github.com/lgm527/tree_trends_onthego'],
        img: ttm
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
    } else if (project === 'dad') {
      this.setState({
        name: 'Dad Jokes Please',
        description: 'A React Native App that brings Dad Jokes straight to your phone! What more could you ask for?',
        demo: 'https://expo.io/@lgm527/dad-jokes-please',
        github: ['https://github.com/lgm527/dadjokesplease'],
        img: dad
      })
    } else if (project === 'calc') {
      this.setState({
        name: 'Spooky Calculator',
        description: 'A calculator with a spooky twist for Halloween.',
        demo: 'https://lgm527.github.io/calc/',
        github: ['https://github.com/lgm527/calc'],
        img: calc
      })
    } else if (project === 'gw') {
      this.setState({
        name: 'George Washington Tour at Fraunces Tavern Museum',
        description: 'Users can browse a tour focusing on George Washington and his relationship with the Nation\'s first capital, New York City.',
        demo: 'https://lgm527.github.io/gw_ftm_tour/',
        github: ['https://github.com/lgm527/gw_ftm_tour'],
        img: gwm
      })
    }
    this.setState({show: true})
  }

  handleKeyPress = (event, project) => {
    if (event.key === 'Space' || event.key === 'Enter') {
      this.handleClick(project)
    }
  }

  handleKeyPressX = (event) => {
    if (event.key === 'Space' || event.key === 'Enter') {
      this.goBack()
    }
  }

  showGitHubs = () => {
    return this.state.github.map((link, i) => {return <p key={i}><a href={link} target='_blank' rel='noopener noreferrer' onMouseDown={this.blurMe} onClick={this.blurMe}>Github {i+1}</a></p>})
  }

  blurMe = (event) => {
    event.stopPropagation();
    event.target.blur();
  }

  render(){
    return (
      <div className='container'>

      { this.state.show ?
        <div className='show'>
          <h2
          onClick={this.goBack}
          onKeyPress={this.handleKeyPressX}
          tabIndex={0}
          className='btn'>
            <span id='x' className='btn_content' tabIndex={-1}>✖︎</span>
          </h2>
          <div id='showText'>
            <h2>{this.state.name}</h2>
            <p key='description'><i>{this.state.description}</i></p>
            <p key='demo'>
              <a
                href={this.state.demo}
                target='_blank'
                rel='noopener noreferrer'
                onMouseDown={this.blurMe}
                onClick={this.blurMe}
              >Demo</a>
            </p>
            {this.showGitHubs()}
          </div>
        </div>
        :
        <div className='projects'>
          <div
          onClick={() => {this.handleClick('tt2')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'tt2')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='tre' src={tt2} alt='tree2'/>
          </div>

          <div
          onClick={() => {this.handleClick('tree')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'tree')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='tre' src={tre} alt='tree'/>
          </div>

          <div
          onClick={() => {this.handleClick('treemobile')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'treemobile')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='treemobile' src={ttm} alt='treetrendsmobile'/>
          </div>

          <div
          onClick={() => {this.handleClick('dad')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'dad')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='dad' src={dad} alt='dad jokes'/>
          </div>

          <div
          onClick={() => {this.handleClick('calc')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'calc')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='calc' src={calc} alt='calculator'/>
          </div>

          <div
          onClick={() => {this.handleClick('git')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'git')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='git' src={gitjobs} alt='git'/>
          </div>

          <div
          onClick={() => {this.handleClick('art')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'art')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='art' src={art} alt='art'/>
          </div>

          <div
          onClick={() => {this.handleClick('cfs')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'cfs')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='cfs' src={cfs} alt='cfs'/>
          </div>

          <div
          onClick={() => {this.handleClick('gw')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'gw')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='gw' src={gwm} alt='gw'/>
          </div>
        </div>
      }

      </div>
    )
  }

}

export default Work;
