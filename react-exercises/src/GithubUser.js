import useSWR from "swr"

const fetchUser = (url) =>
    fetch(url)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error(('Error fetching user data.'))
        })

        
export function useGitHubUser(username) {
    const { data } = useSWR(username ? `https://api.github.com/users/${username}` : " ", fetchUser)

    return {
        data
}}

export function GithubUser({username}){
    
    const {data} = useGitHubUser(username)

    
    return (<div>
        {data && (<div> <h1>Nome utente: {data.login}</h1> <p>Id Utente: {data.id}</p> </div>)}
        </div>)
}