import React, { Component } from 'react';

export default class HomeLifecycle extends Component{
    constructor(){
        super();
        console.log('Constructor');
    }

    componentWillMount(){
        console.log('Component Will Mount');
    }

    componentDidMount(){
        console.log('Component Did Mount');
    }

    componentWillReceiveProps(nextProps){
        console.log('Component Recv props '+nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Should component Update ',nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('component will Update ',nextProps, nextState);
    }

    componentDidUpdate(oldProps, oldState){
        console.log('component did Update ',nextProps, nextState);
    }

    Render(){
        console.log('render');
    }

    render(){
        return(
            <div>
                {this.Render}
            </div>
        );
    }
}