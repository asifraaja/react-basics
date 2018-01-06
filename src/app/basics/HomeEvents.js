import React, {Component} from 'react';

/*
    This script describes a event calling i.e., a button call event, input change event.
    This also explains about the state.
    state - state refers to the data in current class.
          - initialized in constructor only once.
          - it can even read values from props also.
    setState - helps to change the value of state.
             - can be called multiple times
             - only those variables defined in state can be affected.
    functions - normal functions
*/

class HomeEvents extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : props.book.name,
            authors : props.book.authors,
            author : ''
        };
        this.props.headerChange('Home Events');
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addAuthor = this.addAuthor.bind(this);
    }

    handleInputChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name] : value
        })
    }

    addAuthor(){
        this.setState({
            authors : [...this.state.authors, this.state.author]
        });
    }

    render(){
        return(
            <div className="container">
                <h2> Book Details </h2>
                <h3> Name : {this.state.name} </h3>
                <h3> Authors :
                    {this.state.authors.map((author) => <li key={author}> {author} </li> )}
                </h3>
                <hr />
                <input name="author" ref="author" placeholder="Enter new author name" onChange={this.handleInputChange}/>
                <button className="btn btn-primary" onClick={this.addAuthor}> Add Author </button>
            </div>
        );
    }
}

export default HomeEvents;