import React from 'react';
import './style/Work.css';
import tt2 from './assets/tt2.png';
import gitstats from './assets/gitstats.png';
import eat from './assets/eat_q.png';

class Work extends React.Component {

  startingState = {
    show: false,
    name: '',
    description: '',
    demo: '',
    github: '',
    img: ''
  }

  state = this.startingState

  goBack = () => {
    this.setState(this.startingState)
  }

  handleClick = (project) => {
    if (project === 'tt2') {
      this.setState({
        name: 'TreeTrends2.0',
        description: 'Users can locate trees on the NYC streets near them for stewardship opportunities and email the tree\'s information. Inspired by my lack of interaction with trees once moving to NYC, reconnect with nature by utilizing the NYC Open Data API 2015 Street Tree Census.',
        demo: 'https://lgm527.github.io/tt2',
        github: 'https://github.com/lgm527/tt2',
        img: tt2
      })
    } else if (project === 'eat') {
      this.setState({
        name: 'Eat That Question',
        description: 'A timed trivia game to test your knowledge of Frank Zappa lyrics.',
        demo: 'https://eat-that-question.netlify.app/',
        github: 'https://github.com/lgm527/eat_that_question',
        img: eat
      })
    } else if (project === 'gitstats') {
      this.setState({
        name: 'Git Stats',
        description: 'Create a baseball card with GitHub Statistics.',
        demo: 'https://git-stats-and-octocats.netlify.app/',
        github: 'https://github.com/lgm527/git_stats_2',
        img: gitstats
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

  blurMe = (event) => {
    event.stopPropagation()
    event.target.blur()
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
            <p key='links'>
              <a
                href={this.state.demo}
                target='_blank'
                rel='noopener noreferrer'
                onMouseDown={this.blurMe}
                onClick={this.blurMe}>
              demo</a>
              <span> </span>
              <a 
                href={this.state.github} 
                target='_blank' 
                rel='noopener noreferrer' 
                onMouseDown={this.blurMe} 
                onClick={this.blurMe}>
              github</a>
            </p>
          </div>
        </div>
        :
        <div className='projects'>
            <div
          onClick={() => {this.handleClick('eat')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'eat')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='eat' src={eat} alt='eat that question'/>
            <h3>Eat That Question</h3>
          </div>

          <div
          onClick={() => {this.handleClick('tt2')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'tt2')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='tre' src={tt2} alt='tree2'/>
            <h3>TreeTrends2.0</h3>
          </div>  

          <div
          onClick={() => {this.handleClick('gitstats')}}
          onKeyPress={(event) => {this.handleKeyPress(event, 'gitstats')}}
          tabIndex={0}
          className='btn'>
            <img tabIndex={-1} className='btn_content' id='gitstats' src={gitstats} alt='gitstats'/>
            <h3>Git Stats</h3>
          </div>
      </div>
      }

      </div>
    )
  }

}

export default Work;
