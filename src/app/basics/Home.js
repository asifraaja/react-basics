import React, { Component } from 'react';
import DisplayBooks from './DisplayBooks.js';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleInputChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name] : value
        });
    }

    handleAuthorChange(event){
        this.setState({
            authors : [...this.state.authors, event.target.value]
        });

    }

    addAuthor(){
        return(
            <div>
                <input name="author" onChange={this.handleAuthorChange} />
                <button onClick={this.addAuthor}> Add Author </button>
            </div>
        );
    }

    render(){
        return(
            <div className="container">
                <div className="data">
                    <DisplayBooks books={this.state.books}/>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form">
                            Name :
                            <input name="name" ref="name" onChange={this.handleInputChange}/>
                            Authors :
                            <button onClick={this.addAuthor}> Add Author </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        );
    }
}