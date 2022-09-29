import React from "react"
import useSWR, { mutate } from "swr"

const fetchUser = (url) =>
    fetch(url)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error(('Error fetching user data.'))
        })

export function useGitHubUser(username) {
    const { data, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : " ", fetchUser)
    console.log("fetching")
    const refresh = () => mutate()

    return {
        data, onFetchUser: refresh
    }
}


export function GitHubUser({ username }) {
    const { data,  onFetchUser} = useGitHubUser(username)

    const onClick = () => onFetchUser()

    return (
        <div>
             {data &&
                <div>
                    <p> {data.login}</p>
                    <button onClick={onClick}>Refetch data</button>
                </div>}

        </div>
           

    )
}