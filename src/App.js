import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
library.add(faBars)

class App extends Component {
  constructor(){
    super()
    this.state = {
      toggleMenu: false
    }
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className='nav-div'>
            <section id='bootstrap-bill'>Start Bootstrap</section>
            <nav id='nav-bar'>
              <a id='link'>Services</a>
              <a id='link'>Portfolio</a>
              <a id='link'>About</a>
              <a id='link'>Team</a>
              <a id='link'>Contact</a>
            </nav>
            <button id='hamberder' onClick={this.handleToggle}>Menu <FontAwesomeIcon icon='bars'  /></button>
          </div>
          {!this.state.toggleMenu ?
            null
            :
            <nav id='menu'>
              <a>Services</a>
              <a>Portfolio</a>
              <a>About</a>
              <a>Team</a>
              <a>Contact</a>
            </nav>}
          <div className='welcome-div'>
            <section id='studio'>Welcome To Our Studio!</section>
            <section id='meet-you'>it's nice to meet you</section>
            <button id='tell-me'>Tell Me More</button>
          </div>
        </header>
        
        <body className='app-body'>
          <section id='services'>Services</section>
          <section id='portfolio'>Portfolio</section>
          <section id='about'>About</section>
          <section id='team'>Team</section>
          <section id='contact'>Contact</section>
        </body>
      </div>
    );
  }
}

export default App;
