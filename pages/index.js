import Head from 'next/head'
import Homa_page from './home_compnenet/Homa_page'
import HospitalProfile from './components/hospitalProfile'
import UserProfile from './components/userProfile'
import { useEffect,useRef } from 'react'
import Testfrom from './TestForm'

export default function Home() {
  // const circleRef = useRef(null);

  return (
    <>
    <Homa_page/>
    {/* <Testfrom/> */}
    </>
  )
}

