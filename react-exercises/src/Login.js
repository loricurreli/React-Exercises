import React, { useState } from "react";


export function Login(){
    const [userData, setUserData] = useState(
        {
            username: "",
            password: "",
            remember: false
        }
    );

    function handleChange(e){
        const {name,type,value,checked} = e.target
        setUserData({
            ...userData,
            [name] : type==="checkbox" ? checked : value}
        )
    }

    return(
        <div>
            <form >
                <div>
                <label>
                    Username:
                    <input type="text" name="username" value={userData.username} onChange={handleChange} />
                </label>
                </div>
                <div>
                <label>
                    Password:
                    <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                </label>                    
                </div>
                <div>
                <label>
                    Remember:
                    <input type="checkbox" name="remember" value={userData.remember} onChange={handleChange} />
                </label>
                </div>          
                <button disabled={userData.username && userData.password ? false : true}>Login</button>   
            </form>       
        </div>
    )

}
