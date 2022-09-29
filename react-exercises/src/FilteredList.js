import { useEffect, useMemo, useState } from "react";


export const FilteredList = ({ persons }) => {
    const [users, setUsers] = useState(persons)
    const filteredUsers = useMemo(() => users.filter(user => user.age > 18), [users])
    useEffect(() => {setUsers(filteredUsers)}, [filteredUsers])

    return (
        <div>
            <p>List of users filtered</p>
            <ul>
                {users.map(user => <li key={user.id}>{user.name} {user.age}</li>)}
            </ul>
        </div>);
}