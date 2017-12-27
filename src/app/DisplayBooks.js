import React, { Component } from 'react';
import './bootstrap.css';

export default class DisplayBooks extends Component{
    constructor(props){
        super(props);
        this.state = {
            books : this.props.books
        };
    }

    render(){
        console.log(this.state.books.authors);
        return(
            <div className="container">
                <div className="row">
                    {this.state.books.map((book, name) =>
                        <div className="col-md-4">
                            <h3>
                                {book.name} <br/>
                                {book.authors.map((author, index) =>
                                    {author}
                                )}
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}