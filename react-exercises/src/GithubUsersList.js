import React, { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";
export function GithubUsersList(){

    const [users, setUsers] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsers(actualUsers => ({ ...actualUsers, newUser: e.target.elements.userfield.value}))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username"/>
                <input type="submit"/>
            </form>
        </div>
    )
}