import React, { useState, useEffect } from "react";

export function GithubUser(props){
    
    const [users, setUsers] = useState(undefined);

    useEffect(() => {
        fetch(`https://api.github.com/users/${props.username}`)
        .then(response => response.json())
        .then(data => setUsers(data))

    })

    
    return (<div>
        {users && (<div> <h1>Nome utente: {users.login}</h1> <p>Id Utente: {users.id}</p> </div>)}
        </div>)
}