import Head from 'next/head'
import HomePage from './home_compnenet/HomePage'
import HospitalProfile from './Hospital_component/hospitalProfile'
import UserProfile from './Donar_component/UserProfile'
import { useEffect,useRef } from 'react'
import Testfrom from './TestForm'
import { useAuth } from '../contexts/auth'
import Newsfeed from './Newsfeed'
// import Header from './layout/Header'
export default function Home() {
  const {tokens} = useAuth()

  return (
    <>
    {tokens? <Newsfeed/> : <HomePage/>}
    {/* <HospitalProfile/> */}
    
    {/* <Testfrom/> */}

    </>
  )
}

