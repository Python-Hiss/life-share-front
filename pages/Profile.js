import React from 'react'
import axios from 'axios'
import UserProfile from './Donar_component/UserProfile'
import HospitalProfile from './Hospital_component/hospitalProfile'
import { useAuth } from '../contexts/auth'
import { useState } from 'react'
export default function Newsfeed() {
    const { tokens } = useAuth()
    return (
        <>
        {tokens &&
        <div>
             {tokens.Role == 'Hospital' ?  <HospitalProfile/> : <UserProfile/>}
        </div>
        }   
       </> 
    )
}