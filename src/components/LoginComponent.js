import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

export class Login extends React.Component {

    constructor() {
        console.log('Login component loaded');
        super();

        this.state = {
            redirectToReferrer: false
        };

        this.login = this.login.bind(this);
    }

    /**
     * Login button click event handler
     */
    login() {
        /**
         * On click of Login button, call is made to 'authenticate' function
         * Passes the function as a callback
         * The callback is called after 100ms timeout
         * The state is set i.e. view re-renders
         * 'redirectToReferrer' state var is set to true
         */
        fakeAuth.authenticate( () => {
            this.setState( { redirectToReferrer: true } );
        });
    }

    render() {
        /**
         * Obtain the pathname variable from the props or set it by default to '/'
         */
        const { from } = this.props.location.state || {
            from: {
                pathname: '/'
            }
        };

        /**
         * Obtain the value for state var 'redirectToReferrer'
         */
        const { redirectToReferrer } = this.state;

        console.log('redirectToReferrer : ', redirectToReferrer);

        /**
         * Check the value of state var 'redirectToReferrer'
         * If true -> then Redirect to the route originally meant to be navigated to
         * Else render the JSX below
         */
        if(redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div className='jumbotron'>
                <h1 className='display-3'>
                    Login required
                </h1>
                <p className='lead'>
                    You must login to view the page at {from.pathname}.
                </p>
                <p className='lead'>
                    <a className='btn btn-primary btn-lg' onClick={this.login} role='button'>Login</a>
                </p>
            </div>
        );
    }
};

/**
 * Fake Authentication function
 * Initially variable 'isAuthenticated' is set to false
 * 'authenticate' function is present which sets 'isAuthenticated' to true, after 100 ms timeout
 */
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    }
};