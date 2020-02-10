import React from 'react';
import './style/App.css';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import glitchFish from './assets/fish.svg';


class App extends React.Component {

  state={
    show: 'about'
  }

  handleClick = (showThis) => {
    this.setState({show: showThis})
  }

  render(){
    const year = new Date();
    return (
      <div className="App">

        <header className="App-header">
          <div onClick={ () => {this.handleClick('about')} }>
          <h1>
          {this.state.show === 'about' ? <u>About</u> : 'About'}
          </h1></div>
          <div onClick={ () => {this.handleClick('work')} }>
          <h1>{this.state.show === 'work' ? <u>Work</u> : 'Work'}
          </h1></div>
          <div onClick={ () => {this.handleClick('contact')} }>
          <h1>{this.state.show === 'contact' ? <u>Contact</u> : 'Contact'}
          </h1></div>
          <div onClick={ () => {this.handleClick('resume')} }>
          <h1>{this.state.show === 'resume' ? <u>Resume</u> : 'Resume'}
          </h1></div>
        </header>

        <div className='stuff'>
          {this.state.show === 'about' ? <About /> : null}
          {this.state.show === 'work' ? <Work /> : null}
          {this.state.show === 'contact' ? <Contact /> : null}
          {this.state.show === 'resume' ? <Resume /> : null}
        </div>

        <footer className='App-footer'>

        <div className='social'>
        <a href='https://github.com/lgm527'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
        <a href='https://www.linkedin.com/in/lgm527/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
        <a href='https://medium.com/@lgm527'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/></svg></a>
        <a href='https://glitch.com/@lgm527'><img width="24" height="24" src={glitchFish} alt='glitch fish' /></a>
        <a href='https://expo.io/@lgm527'><svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="-2 -1 26 24"><path fill="rgba(0, 0, 0, 1)" fillRule="evenodd" d="M5.84439563e-15,18.52072 C0.042601976,19.0415198 0.225318565,19.5638181 0.704130384,20.2650123 C1.27202197,21.0966169 2.24914731,21.5536071 2.9619004,20.8204258 C3.44287509,20.3256353 8.643748,11.2343287 11.1501969,7.78933904 C11.4511295,7.3640867 12.0728268,7.3640867 12.3739317,7.78933904 C14.8803807,11.2343287 20.0812536,20.3256353 20.5622283,20.8204258 C21.2748089,21.5536071 22.2521067,21.0966169 22.8199983,20.2650123 C23.3790947,19.4462456 23.5343035,18.8713971 23.5343035,18.2580353 C23.5343035,17.8402716 15.4344759,2.76636898 14.6187677,1.5116517 C13.8343003,0.304828919 13.5946623,0.042335452 12.268059,0 L11.2560275,1.79395598e-12 C9.92932506,0.042335452 9.68981105,0.304828919 8.90518853,1.5116517 C8.10659328,2.74030565 0.3230204,17.219996 0,18.213285 L5.84439563e-15,18.52072 Z"></path></svg></a>
        </div>

        <div id='allMe'>
          <h2 id='title'>Full Stack Engineer <br></br>at <a href='https://www.themuse.com/'>The Muse</a></h2>
          <h1 className='name'>Laurell</h1>
          <h1 className='name'>McCaffrey</h1>
          <p id='copy'>© Laurell McCaffrey {year.getFullYear()}</p>
        </div>

        </footer>

      </div>
    )
  }


}

export default App;