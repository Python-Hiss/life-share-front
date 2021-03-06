import React from 'react'
import HospitalProfile from '../components/hospitalProfile'
import { useAuth } from '../contexts/auth'
import UserProfile from '../components/UserProfile'
export default function Newsfeed() {
    const { tokens } = useAuth()
    return (
        <>
        {tokens ?
        <div>
             {tokens.Role == 'Hospital' ?  <HospitalProfile/> : <UserProfile/>}
        </div>
        : <h2>plz sign in </h2>
        }   
       </> 
    )
}