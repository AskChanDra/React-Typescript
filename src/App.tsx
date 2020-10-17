import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  { Message, Message2 }  from './Message';

// readOnly: items that can only be read once created.
const initialState = {
  name : 'CP',
  message : 'My Short name!!'
}

type State = Readonly<typeof initialState >;

class  App extends Component<any, State> {

  readonly state: State = initialState;
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Message: <br /> <Message name={this.state.name} message={this.state.message} /> <br />
        <Message2 />
      </header>
    </div>
    );
  }
}

export default App;