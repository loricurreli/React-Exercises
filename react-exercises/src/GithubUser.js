import React, { useState, useEffect } from "react";

export function useGitHubUser(username) {
    const [user, setUser] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if(response.status === 200){
                    return response.json()   
                }
                else setError(new Error('An error has occurred')) 
            })
            .then(data=> setUser(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [username])

    return {
        user: user,
        error: error,
        loading: loading
    }
}


export function GithubUser(props){
    
    const {user, error, loading} = useGitHubUser(props.username)

    
    return (<div>
        {loading && <p>Fetching the user</p>}
        {error && <p>User Not Found</p>}
        {user && (<div> <h1>Nome utente: {user.login}</h1> <p>Id Utente: {user.id}</p> </div>)}
        </div>)
}






