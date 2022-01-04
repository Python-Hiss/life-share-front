import Head from 'next/head'
import HomePage from './home_compnenet/HomePage'
import HospitalProfile from './components/hospitalProfile'
import UserProfile from './components/userProfile'
import { useEffect,useRef } from 'react'
import AboutUs from './home_compnenet/AboutUs'

export default function Home() {
  // const circleRef = useRef(null);

  return (
    <>
    {/* <HomePage/> */}
    <AboutUs/>
    </>
  )
}

