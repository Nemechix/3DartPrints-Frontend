import React, { useEffect, useState } from 'react'
import './UserById.css'
import getUserById from '../../Services/GetUserById'
import { useParams } from 'react-router-dom'

function UserById() {
    const [user, setUser] = useState(null)
    const { id } = useParams()
    console.log(user)

const getUser = async () => {
    const result = await getUserById(id)
    console.log(result.data)
    setUser(result.data)
}

useEffect(() => {
    getUser()
}, [id])

    return (
        <div>{user}</div>
    )
}

export default UserById
