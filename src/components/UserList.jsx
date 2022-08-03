import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import SingleUser from './singleUser'

const UserList = () => {
    const [users,setUsers] =useState([])
    const fetchUsers = async()=>{
        const response = await axios.get("https://randomuser.me/api/?results=10")
        setUsers (response.data.results)
    }

    useEffect(()=>{
        fetchUsers()
    },[])
  return (
        <div className="user-list">
            <ul>
                {users.map((user,index)=>(
                    <li><SingleUser user={user} key={index}></SingleUser></li>
                ))}
            </ul>
        </div>
    )
}

export default UserList