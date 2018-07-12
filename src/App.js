import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Home from './components/HomeComponent';
import Hello from './components/HelloComponent';
import About from './components/AboutComponent';
import Books from './components/BooksComponent';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/hello'>Hello</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/books'>Books</Link></li>
            </ul>
          </div>

          <Route path='/' exact={true} component={Home} />
          <Route path='/hello' component={Hello} />
          <Route path='/about' component={About} />
          <Route path='/books' component={Books} />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
      </Router>
    );
  }
}

export default App;
