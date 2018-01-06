import React, { Component } from 'react';
import '../bootstrap.css';
import config from '../../config.json';

var url = config.protocol + '://' + config.host + ':' + config.port;

export default class DisplayBooks extends Component{
    constructor(){
        super();
        this.state = {
            books : []
        };
        this.getBooks = this.getBooks.bind(this);
    }

    getBooks(){

    }

    componentDidMount(){
        var limit = 5;
        var apiUrl = url + '/api/books/'+limit;
        console.log(apiUrl);
        fetch(apiUrl)
           .then(res => res.json())
           .then(result => this.setState({
               books : result
            }));
    }

    render(){
        return(
            <div>
                <div className="table">
                    <table border="1">
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Author </th>
                                <th> Publisher </th>
                                <th> Genre </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.books.map((book,i) =>
                                <tr>
                                    <td> {book.name} </td>
                                    <td> {book.author} </td>
                                    <td> {book.publisher} </td>
                                    <td> {book.genre} </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}