import React from "react";

export class Login extends React.Component{
    constructor(props){
        super(props)
    }
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
                <form onSubmit={this.props.onLogin}>
                    <div>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    </div>
                    <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
                    </label>                    
                    </div>
                    <div>
                    <label>
                        Remember:
                        <input type="checkbox" name="remember" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    </div>          
                    <button disabled={this.state.username && this.state.password ? false : true}>Login</button>  
                    <input type="reset"/>   
                </form>       
            </div>
        )
    }
}