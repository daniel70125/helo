import React, {Component} from 'react';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.location.pathname)
        return (
            // this.props.location.pathname === '/' ? null : <div>Try again</div>
            <div>
                <input onChange ={() => this.updateUser} type='text' />
                <input onChange ={() => this.updatePass} type='password' />
                <button>Login</button>
                <button>Register</button>
            </div>
          );
    }
}
 
export default Auth;
