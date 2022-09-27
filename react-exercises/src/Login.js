import { useState } from "react";

export function useLogin(){
    const [data, setData] = useState({username: '', password: ''});
    return{
        userData: data,
        onInput: (event) => setData(prevData => ({...prevData, [event.target.name]: event.target.value}))
    }
}



export function Login() {
    const {userData, onInput} = useLogin()
    return(
        <form>
            <input type="text" name="username" value={userData.username} onChange={onInput}/>
            <input type="text" name="password" value={userData.password} onChange={onInput}/>
        </form>
    )

    
}