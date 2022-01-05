import Head from 'next/head'
import Homa_page from '../components/Homa_page'

import { useAuth } from '../contexts/auth'
import Newsfeed from './Newsfeed'
export default function Home() {
  const {tokens} = useAuth()

  return (
    <>
    
    {tokens? <Newsfeed/> : <Homa_page/>}

    {/* <HospitalProfile/> */}
    
    {/* <Testfrom/> */}

    </>
  )
}

