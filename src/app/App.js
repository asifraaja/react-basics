import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
        header : 'Home'
    };
    this.onHeaderChange = this.onHeaderChange.bind(this);
  }

  onHeaderChange(headerName){
    this.setState({
        header : headerName
    });
  }
  render() {
    return (
      <div className="App">
        <div className="row">
            <Header header={this.state.header} />
        </div>
        <div className="row">
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;

// https://www.youtube.com/watch?v=Oioo0IdoEls&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=15 .watch again.