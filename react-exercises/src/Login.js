import React from "react";

export class Login extends React.Component{
    
    state = {
        username: "",
        password: "",
        remember: false
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const remember = e.target.elements.remember.checked
        this.setState({
            username,
            password,
            remember
        })
    }
    handleReset = (e) => {
        e.preventDefault()
        
        this.setState({
            username: "",
            password: "",
            remember: ""
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" autoFocus/>
                    <input type="password" name="password" />
                    <input type="checkbox" name="remember" />     
                    <button>Login</button>  
                    <input type="reset" onClick={this.handleReset}/>   
                </form>       
            </div>
        )
    }
}