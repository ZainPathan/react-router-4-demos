import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

const Books = (props) => {
    // props contains match, history and location - added by Route i.e. component created via route
    let match = props.match;
    /**
     * match contains the following properties
     * params — (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path.
     * isExact — (boolean) true if the entire URL was matched (no trailing characters).
     * path — (string) The path pattern used to match. Useful for building nested <Route>s
     * url — (string) The matched portion of the URL. Useful for building nested <Link>s
     */
    return (
        <div>
            <div className='jumbotron'>
                <h1 className='display-3'>My Books</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <ul>
                            {/* Route => match.path
                            Link => match.url */}
                            <li><Link to={`${match.url}/html`}>HTML</Link></li>
                            <li><Link to={`${match.url}/css`}>CSS</Link></li>
                            <li><Link to={`${match.url}/react`}>React</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-9'>
                        {/* Routes to be added here */}
                        {/* Route => match.path
                        Link => match.url */}
                        <Route path={`${match.path}/html`} render={() => {
                            return (
                                <h1>HTML Books</h1>
                            );
                        }}/>
                        <Route path={`${match.path}/css`} render={() => {
                            return (
                                <h1>CSS Books</h1>
                            );
                        }}/>
                        <Route path={`${match.path}/react`} render={() => {
                            return (
                                <h1>React Books</h1>
                            );
                        }}/>
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default Books;