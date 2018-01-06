import React, { Component } from 'react';
import logo from '../bookLogo.jpg';
import {HashRouter,Link,Route} from 'react-router-dom';

import Homepage from './Homepage.js';
import Userpage from './Userpage.js';

export default class Header extends Component{

    render(){
        console.log(this.props);
        return(
            <div className="header">
                <h2> {this.props.header} </h2>
                <img src={logo} className="App-logo" alt="logo" />
                <HashRouter>
                    <div>
                        <div className="navbar navbar-default">
                            <ul>
                                <li><Link to="/book">Book</Link></li>
                                <li><Link to="/user">User</Link></li>
                            </ul>
                        </div>
                        <div>
                           <Route path="/book" component={Homepage}/>
                           <Route path="/user" component={Userpage}/>
                        </div>
                   </div>
                </HashRouter>
            </div>
        );
    }
}