import React, { useEffect, useState } from 'react'
import './UserByUsername.css'
import getUserByUsername from '../../Services/GetUserByUsername.jsx'
import { useParams } from 'react-router-dom'

function UserByUsername() {
    const [user, setUser] = useState([])
    const { username } = useParams()
    console.log(username)
    //console.log(user)

const getUser = async () => {
    const result = await getUserByUsername(username)
    console.log(result.data)
    setUser(result.data)
}

useEffect(() => {
    getUser()
}, [username])

    return (
        <div>{user.name}</div>
    )
}

export default UserByUsername
