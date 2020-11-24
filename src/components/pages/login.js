import React, {Component} from 'react';

class Login extends Component {
    Login=()=>{
        sessionStorage.setItem("userName","Safwan");
    }
    LogOut=()=>{
        sessionStorage.clear();
    }
    render() {
        return (
            <div>
                <button onClick={this.Login}>LogIn</button>
                <button onClick={this.LogOut}>LogOut</button>
            </div>
        );
    }
}

export default Login;