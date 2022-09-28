import React, { useState, useEffect } from "react";

export function useGitHubUser(username) {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [username])

    return{
        data: user
    }
}


export function GithubUser(props){
    
    const {data} = useGitHubUser(props.username)

    
    return (<div>
        {data && (<div> <h1>Nome utente: {data.login}</h1> <p>Id Utente: {data.id}</p> </div>)}
        </div>)
}







