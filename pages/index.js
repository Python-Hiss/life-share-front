import Head from 'next/head'
import Homa_page from './home_compnenet/Homa_page'
import HospitalProfile from './Hospital_component/hospitalProfile'
import UserProfile from './Donar_component/userProfile'
import { useEffect,useRef } from 'react'
import Testfrom from './TestForm'
import { useAuth } from '../contexts/auth'
import Newsfeed from './Newsfeed'

export default function Home() {
  const {tokens} = useAuth()

  return (
    <>
    
    {/* <Newsfeed/> */}
    {<HospitalProfile/>}
    {/* <Testfrom/> */}
    </>
  )
}

