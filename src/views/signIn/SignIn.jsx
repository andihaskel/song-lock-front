import React from 'react';

import './SignIn.css';
import SignInSide from '../../components/SignInSide.jsx';

import { hist } from 'index.js'

class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.handleSignIn = this.handleSignIn.bind(this)
  }
  
  handleSignIn = () => {
    hist.push('/pending-orders');
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SignInSide handleSignIn={this.handleSignIn}/>
         
        </header>
      </div>
    );
  }
}

export default SignIn;
