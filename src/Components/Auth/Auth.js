import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         }
         this.getUser = this.getUser.bind(this);
    }

    getUser(){
        console.log("Hello")
        const {username, password} = this.state;
        
        let body = {
            username,
            password
        }
        console.log(body);
        axios.post('/api/auth/register', body)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
    } 
    updateUser(e){
        this.setState({
            username: e
        })
    }
    updatePass(e){
        this.setState({
            password: e
        })
    }
    render() { 
        console.log(this.state);
        return (
            // this.props.location.pathname === '/' ? null : <div>Try again</div>
            <div>
                <input onChange ={(e) => this.updateUser(e.target.value)} type='text' />
                <input onChange ={(e) => this.updatePass(e.target.value)} type='password' />
                <button onClick={() => this.getUser()}>Login</button>
                <button>Register</button>
            </div>
          );
    }
}
 
export default Auth;
