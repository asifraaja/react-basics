import React, {Component} from 'react';

/*
    This script recvs properties sent from the parent class.
    The properties are stored in this.props.
    the data can be accessed using this.props.propertyName
*/
class HomeRecvProps extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="container">
                <h2> Book Details </h2>
                <h3> Name : {this.props.book.name} </h3>
                <h3> Authors :
                    {this.props.book.authors.map((author) => <li key={author}> {author} </li> )}
                </h3>
            </div>
        );
    }
}

export default HomeRecvProps;