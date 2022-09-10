import React from "react";

export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        remember: false
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.name==="checkbox" ? e.target.checked : e.target.value});
        console.log(this.state)
    }
    render(){
        return(
            <div>
                    <div>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    </div>
                    <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>                    
                    </div>
                    <div>
                    <label>
                        Remember:
                        <input type="checkbox" name="remember" value={this.state.remember} onChange={this.handleChange} />
                    </label>
                    </div>      
                          
            </div>
        )
    }
}