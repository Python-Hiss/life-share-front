import React from 'react'
import UserProfile from './Donar_component/UserProfile'
import HospitalProfile from './Hospital_component/hospitalProfile'
import { useAuth } from '../contexts/auth'

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