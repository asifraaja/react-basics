import React, { Component } from 'react';
import logo from '../bookLogo.jpg'

export default class Header extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="header">
                <h2> {this.props.header} </h2>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}