import React, { useState } from "react";


export function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    return(
        <div>
            <form >
                <div>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>                    
                </div>
                <div>
                <label>
                    Remember:
                    <input type="checkbox" name="remember" value={remember} onChange={(e) => setRemember(e.target.checked)} />
                </label>
                </div>          
                <button disabled={username && password ? false : true}>Login</button>   
            </form>       
        </div>
    )

}
