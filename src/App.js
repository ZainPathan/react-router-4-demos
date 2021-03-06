import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Home from './components/HomeComponent';
import Hello from './components/HelloComponent';
import About from './components/AboutComponent';
import Books from './components/BooksComponent';
import NoMatch from './components/NoMatchComponent';
import Admin from './components/AdminComponent';

import { Login, fakeAuth } from './components/LoginComponent';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/hello'>Hello</Link></li>
              <li><Link to='/hello/goodmorning'>Hello GM</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/books'>Books</Link></li>
              <li>
                <Link to='/admin'>Admin</Link>
              </li>
            </ul>
          </div>

        {/* Using Switch only one route is matched and not multiple routes i.e. only one route is rendered */}
          <Switch>
            <Route path='/' exact={true} component={Home} />
            {/* Ordering of routes matter - if /hello was before this, then it would always be rendered
            and /hello/goodmorning would never be rendered */}
            <Route path='/hello/goodmorning' render={ () => {
              return (
                <div className='jumbotron'>
                  <h1 className='display-3'>Hello Good Morning!</h1>
                </div>
              )
            }} />
            <Route path='/hello' component={Hello} />
            <Route path='/about' component={About} />
            {/* <Route path='/books' component={Books} /> */}

            {/* Authenticated Routing part */}
            <Route path='/login' component={Login} />
            {/* PrivateRoute is a custom component wrapper over Route
            Used for obtaining reusability for authentication redirection flow */}
            <PrivateRoute authed={fakeAuth.isAuthenticated} path='/admin' component={Admin} />
            {/* Books Route '/books' also converted to an authenticated route */}
            <PrivateRoute authed={fakeAuth.isAuthenticated} path='/books' component={Books} />

            {/* No Match route specified - to be rendered when no route is matched
            Works only with Switch */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
      </div>
      </Router>
    );
  }
}

const PrivateRoute = ( {component: Component, ...rest} ) => {
  // let { component: Component, ...rest } = props; 
  return (
    <Route {...rest} render={(props) => {
        return (
          fakeAuth.isAuthenticated ? 
            (<Component {...props} />) :
              (<Redirect 
                  to={
                    {
                      pathname:'/login',
                      state: {
                        from: props.location
                      }
                    }
                  }
                />
              )
        );
      }}
    />
  );
};

export default App;
