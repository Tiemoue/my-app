import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: User[] = await res.json() 

  return (
    <>
    <div>UsersPage</div>
    <ul>
        {data.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
    </>
  )
}

export default UsersPage