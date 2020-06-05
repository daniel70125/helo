import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';


import Routes from './routes';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    console.log(this.props);
    return (
      <div className="App">
        <Nav />
        {Routes}
      </div>
    );
  }
}

export default App;
