import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GitHubUsersList() {
    const [users, setUsers] = useState({ users: ["loricurreli"], newUser: null });

    useEffect(() => {
        setUsers(state => ({ ...state, users: [...state.users, state.newUser] }))
    }, [users.newUser])

    const handleSubmit = (event) => {
        event.preventDefault()
        setUsers(state => ({ ...state, newUser: event.target.elements.userfield.value }))
    }

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.users.map((user,i) => user &&<li key={i}><Link to={user}>{user}</Link></li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userfield" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
