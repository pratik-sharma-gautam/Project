import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import HomeCard from '@/components/HomeCard'

function Home() {
  
  return (
   <>
   <Navbar/>
   <HomeCard title="Sleep" href="mypages/sleep" />
   </>
  )
}

export default Home